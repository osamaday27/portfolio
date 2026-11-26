<?php
namespace Tests\Feature;
use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
class PublicApiTest extends TestCase {
    use RefreshDatabase;
    private function make(array $o = []): Project {
        return Project::create($o + ['slug' => 'demo', 'repo' => 'demo', 'title' => ['en' => 'Demo', 'ar' => 'تجريبي'], 'categories' => ['web'], 'stack' => [], 'is_published' => true]);
    }
    public function test_only_published_projects_are_listed(): void {
        $this->make(); $this->make(['slug' => 'draft', 'repo' => 'draft', 'is_published' => false]);
        $this->getJson('/api/v1/projects')->assertOk()->assertJsonCount(1, 'data')->assertJsonPath('data.0.slug', 'demo');
        $this->getJson('/api/v1/projects/draft')->assertNotFound();
    }
    public function test_cache_is_flushed_when_content_changes(): void {
        $p = $this->make();
        $this->getJson('/api/v1/projects')->assertJsonPath('data.0.title.en', 'Demo');
        $p->update(['title' => ['en' => 'Changed', 'ar' => 'x']]);
        $this->getJson('/api/v1/projects')->assertJsonPath('data.0.title.en', 'Changed');
    }
    public function test_contact_form_validates_and_stores(): void {
        $this->postJson('/api/v1/contact', [])->assertUnprocessable();
        $this->postJson('/api/v1/contact', ['name' => 'A', 'email' => 'a@b.co', 'subject' => 'Hi', 'message' => 'Hello there, nice work', 'type' => 'other'])->assertCreated();
        $this->assertDatabaseCount('contact_messages', 1);
    }
}
