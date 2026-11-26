<?php
namespace App\Services;
use App\Models\Setting;
class SettingService {
    public function all(): array { return Setting::all()->pluck('value', 'key')->all(); }
    public function get(string $key, array $default = []): array { return Setting::find($key)?->value ?? $default; }
    public function put(string $key, array $value): void { Setting::updateOrCreate(['key' => $key], ['value' => $value]); }
}
