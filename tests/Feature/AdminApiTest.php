<?php
namespace Tests\Feature;
use App\Models\{Project, User};
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\{Queue, Storage};
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
class AdminApiTest extends TestCase {
    use RefreshDatabase;
    private array $payload = ['repo' => 'my-clinic', 'title' => ['en' => 'My Clinic', 'ar' => 'عيادتي'], 'categories' => ['healthcare'], 'stack' => ['Laravel'], 'is_published' => true];
    private function admin(): User { return tap(User::factory()->create(), fn ($u) => $u->forceFill(['is_admin' => true])->save()); }
    public function test_guests_and_non_admins_are_rejected(): void {
        $this->postJson('/api/v1/admin/projects', $this->payload)->assertUnauthorized();
        Sanctum::actingAs(User::factory()->create());
        $this->postJson('/api/v1/admin/projects', $this->payload)->assertForbidden();
    }
    public function test_admin_can_create_validate_and_update_a_project(): void {
        Sanctum::actingAs($this->admin());
        $this->postJson('/api/v1/admin/projects', ['repo' => 'x'])->assertUnprocessable()->assertJsonValidationErrors(['title.en', 'categories']);
        $id = $this->postJson('/api/v1/admin/projects', $this->payload)->assertCreated()->assertJsonPath('data.slug', 'my-clinic')->json('data.id');
        $this->putJson("/api/v1/admin/projects/$id", [...$this->payload, 'repo' => 'my-clinic', 'title' => ['en' => 'Renamed', 'ar' => 'x']])->assertOk();
        $this->assertSame('Renamed', Project::find($id)->title['en']);
    }
    public function test_uploading_a_new_cover_replaces_the_old_one(): void {
        Storage::fake('public'); Queue::fake(); Sanctum::actingAs($this->admin());
        $id = $this->postJson('/api/v1/admin/projects', $this->payload)->json('data.id');
        foreach ([1, 2] as $_) {
            $this->postJson("/api/v1/admin/projects/$id/images", ['type' => 'cover', 'image' => UploadedFile::fake()->image('a.png', 1200, 800)])->assertCreated();
        }
        $this->assertSame(1, Project::find($id)->images()->where('type', 'cover')->count());
        $this->assertCount(1, Storage::disk('public')->allFiles('projects/my-clinic'));
    }
    public function test_profile_photo_upload(): void {
        Storage::fake('public'); Sanctum::actingAs($this->admin());
        $this->postJson('/api/v1/admin/profile/photo', ['photo' => UploadedFile::fake()->image('me.jpg', 800, 1000)])->assertOk()->assertJsonStructure(['url']);
    }
}
