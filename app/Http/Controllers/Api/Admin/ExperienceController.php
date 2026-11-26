<?php
namespace App\Http\Controllers\Api\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExperienceRequest;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;
class ExperienceController extends Controller {
    public function index() { return ExperienceResource::collection(Experience::orderBy('sort_order')->orderByDesc('start_date')->get()); }
    public function store(ExperienceRequest $r) { return (new ExperienceResource(Experience::create($r->validated())))->response()->setStatusCode(201); }
    public function update(ExperienceRequest $r, Experience $experience) { $experience->update($r->validated()); return new ExperienceResource($experience); }
    public function destroy(Experience $experience) { $experience->delete(); return response()->noContent(); }
}
