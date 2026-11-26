<?php
namespace App\Http\Controllers\Api\Admin;
use App\Actions\SaveProjectAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProjectController extends Controller {
    public function index() { return ProjectResource::collection(Project::with('images')->orderBy('sort_order')->orderByDesc('id')->paginate(30)); }
    public function show(Project $project) { return new ProjectResource($project->load('images')); }
    public function store(ProjectRequest $r, SaveProjectAction $save) { return (new ProjectResource($save($r->validated())))->response()->setStatusCode(201); }
    public function update(ProjectRequest $r, Project $project, SaveProjectAction $save) { return new ProjectResource($save($r->validated(), $project)); }
    public function destroy(Project $project) { $project->delete(); return response()->noContent(); }
    public function reorder(Request $request) {
        $ids = $request->validate(['ids' => ['required', 'array'], 'ids.*' => ['integer', 'exists:projects,id']])['ids'];
        DB::transaction(fn () => collect($ids)->each(fn ($id, $i) => Project::whereKey($id)->update(['sort_order' => $i])));
        return response()->noContent();
    }
}
