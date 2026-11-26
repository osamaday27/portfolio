<?php
namespace App\Providers;
use App\Models\{Experience, Project, ProjectImage, Setting, Skill, SkillGroup, User};
use App\Observers\PublicCacheObserver;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
class AppServiceProvider extends ServiceProvider {
    public function boot(): void {
        Gate::define('manage-site', fn (User $user) => $user->is_admin);
        foreach ([Project::class, ProjectImage::class, SkillGroup::class, Skill::class, Experience::class, Setting::class] as $model) {
            $model::observe(PublicCacheObserver::class);
        }
    }
}
