<?php
namespace App\Http\Controllers\Api\Public;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Support\PublicCache;
class ProjectController extends Controller {
    public function index() {
        return response()->json(['data' => PublicCache::remember('projects', fn () =>
            ProjectResource::collection(Project::published()->with('images')->orderBy('sort_order')->orderByDesc('id')->get())->resolve())]);
    }
    public function show(string $slug) {
        $data = PublicCache::remember("project.$slug", fn () =>
            ($p = Project::published()->with('images')->where('slug', $slug)->first()) ? (new ProjectResource($p))->resolve() : null);
        abort_if($data === null, 404);
        return response()->json(['data' => $data]);
    }
}
