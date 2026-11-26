<?php
namespace App\Http\Controllers\Api\Admin;
use App\Http\Controllers\Controller;
use App\Services\{ImageService, SettingService};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class ProfileController extends Controller {
    public function photo(Request $request, ImageService $images, SettingService $settings) {
        $request->validate(['photo' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:8192']]);
        $media = $settings->get('media');
        $new = $images->storeWebp($request->file('photo'), 'profile', 1000);
        $settings->put('media', [...$media, 'photo' => $new]);
        $images->delete($media['photo'] ?? null);
        return response()->json(['url' => Storage::disk('public')->url($new)]);
    }
    public function cv(Request $request, ImageService $images, SettingService $settings) {
        $request->validate(['cv' => ['required', 'file', 'mimes:pdf', 'max:5120']]);
        $media = $settings->get('media');
        $new = $request->file('cv')->store('files', 'public');
        $settings->put('media', [...$media, 'cv' => $new]);
        $images->delete($media['cv'] ?? null);
        return response()->json(['url' => Storage::disk('public')->url($new)]);
    }
}
