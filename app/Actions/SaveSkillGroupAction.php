<?php
namespace App\Actions;
use App\Models\SkillGroup;
use Illuminate\Support\Facades\DB;
class SaveSkillGroupAction {
    public function __invoke(array $data, ?SkillGroup $group = null): SkillGroup {
        return DB::transaction(function () use ($data, $group) {
            $group ??= new SkillGroup();
            $group->fill(collect($data)->only(['key', 'title', 'sort_order'])->all())->save();
            if (array_key_exists('skills', $data)) {
                $group->skills()->delete();
                $group->skills()->createMany(collect($data['skills'])->values()->map(fn ($s, $i) => [
                    'name' => $s['name'], 'level' => $s['level'] ?? null, 'sort_order' => $i,
                ])->all());
            }
            return $group->load('skills');
        });
    }
}
