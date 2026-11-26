<?php
namespace App\Http\Controllers\Api\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateSettingRequest;
use App\Services\SettingService;
use App\Support\SettingSchema;
class SettingController extends Controller {
    public function index(SettingService $settings) { return response()->json(['data' => array_intersect_key($settings->all(), array_flip(SettingSchema::sections()))]); }
    public function update(UpdateSettingRequest $r, SettingService $settings, string $section) {
        $settings->put($section, $r->validated());
        return response()->json(['data' => $settings->get($section)]);
    }
}
