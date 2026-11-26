<?php
namespace App\Http\Controllers\Api\Public;
use App\Http\Controllers\Controller;
use App\Http\Resources\{ExperienceResource, SkillGroupResource};
use App\Models\{Experience, SkillGroup};
use App\Services\SettingService;
use App\Support\PublicCache;
use Illuminate\Support\Facades\Storage;
class SiteController extends Controller {
    public function show(SettingService $settings) {
        return response()->json(['data' => PublicCache::remember('site', function () use ($settings) {
            $all = $settings->all();
            $media = $all['media'] ?? [];
            $all['media'] = [
                'photo' => ! empty($media['photo']) ? Storage::disk('public')->url($media['photo']) : null,
                'cv' => ! empty($media['cv']) ? Storage::disk('public')->url($media['cv']) : null,
            ];
            return $all;
        })]);
    }
    public function skills() {
        return response()->json(['data' => PublicCache::remember('skills', fn () =>
            SkillGroupResource::collection(SkillGroup::with('skills')->orderBy('sort_order')->get())->resolve())]);
    }
    public function experience() {
        return response()->json(['data' => PublicCache::remember('experience', fn () =>
            ExperienceResource::collection(Experience::orderBy('sort_order')->orderByDesc('start_date')->get())->resolve())]);
    }
}
