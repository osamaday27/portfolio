<?php
namespace Database\Seeders;
use App\Actions\{SaveProjectAction, SaveSkillGroupAction};
use App\Models\{Experience, Project, Setting, SkillGroup};
use Illuminate\Database\Seeder;
/** Idempotent: only fills empty tables, so re-seeding never overwrites what you edited in the dashboard. */
class SiteSeeder extends Seeder {
    public function run(SaveProjectAction $saveProject, SaveSkillGroupAction $saveGroup): void {
        $d = json_decode(file_get_contents(__DIR__.'/data/site.json'), true, 512, JSON_THROW_ON_ERROR);
        foreach ($d['settings'] as $key => $value) Setting::firstOrCreate(['key' => $key], ['value' => $value]);
        if (! SkillGroup::exists()) foreach ($d['skill_groups'] as $i => $g) $saveGroup([...$g, 'sort_order' => $i]);
        if (! Experience::exists()) foreach ($d['experiences'] as $i => $e) Experience::create([...$e, 'sort_order' => $i]);
        if (! Project::exists()) foreach ($d['projects'] as $i => $p) $saveProject([...$p, 'sort_order' => $i, 'is_published' => true, 'is_featured' => false]);
    }
}
