<?php
namespace App\Http\Controllers\Api\Admin;
use App\Actions\StoreProjectImageAction;
use App\Enums\ImageType;
use App\Http\Controllers\Controller;
use App\Http\Requests\ImageRequest;
use App\Http\Resources\ProjectImageResource;
use App\Models\{Project, ProjectImage};
class ProjectImageController extends Controller {
    public function store(ImageRequest $r, Project $project, StoreProjectImageAction $store) {
        $image = $store($project, $r->file('image'), ImageType::from($r->input('type')), $r->input('alt'));
        return (new ProjectImageResource($image))->response()->setStatusCode(201);
    }
    public function update(ImageRequest $r, Project $project, ProjectImage $image) {
        $image->update($r->safe()->only(['type', 'alt', 'sort_order']));
        return new ProjectImageResource($image);
    }
    public function destroy(Project $project, ProjectImage $image) { $image->delete(); return response()->noContent(); }
}
