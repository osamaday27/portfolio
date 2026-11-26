<?php
namespace App\Http\Controllers\Api\Admin;
use App\Actions\SaveSkillGroupAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\SkillGroupRequest;
use App\Http\Resources\SkillGroupResource;
use App\Models\SkillGroup;
class SkillGroupController extends Controller {
    public function index() { return SkillGroupResource::collection(SkillGroup::with('skills')->orderBy('sort_order')->get()); }
    public function store(SkillGroupRequest $r, SaveSkillGroupAction $save) { return (new SkillGroupResource($save($r->validated())))->response()->setStatusCode(201); }
    public function update(SkillGroupRequest $r, SkillGroup $skillGroup, SaveSkillGroupAction $save) { return new SkillGroupResource($save($r->validated(), $skillGroup)); }
    public function destroy(SkillGroup $skillGroup) { $skillGroup->delete(); return response()->noContent(); }
}
