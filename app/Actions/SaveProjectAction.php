<?php
namespace App\Actions;
use App\Models\Project;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
class SaveProjectAction {
    public function __invoke(array $data, ?Project $project = null): Project {
        return DB::transaction(function () use ($data, $project) {
            if (array_key_exists('case_study', $data)) {
                $data['case_study'] = Arr::only($data['case_study'] ?? [], Project::CASE_STUDY_SECTIONS) ?: null;
            }
            $project ??= new Project();
            $project->fill($data)->save();
            return $project->load('images');
        });
    }
}
