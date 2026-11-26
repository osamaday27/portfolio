<?php
namespace App\Support;
/** Single source of truth for which site sections are editable and how they validate. */
final class SettingSchema {
    private static function bi(string $k, int $max, bool $required = true): array {
        $r = $required ? 'required' : 'nullable';
        return [$k => [$required ? 'required' : 'nullable', 'array'], "$k.en" => [$r, 'string', "max:$max"], "$k.ar" => [$r, 'string', "max:$max"]];
    }
    public static function rules(string $section): ?array {
        return match ($section) {
            'hero' => [...self::bi('greeting', 100), ...self::bi('name', 100), ...self::bi('title', 150), ...self::bi('description', 1200), 'available' => ['required', 'boolean']],
            'about' => [...self::bi('intro', 3000), 'steps' => ['nullable', 'array', 'max:12'], ...self::bi('steps.*', 200)],
            'contact' => [...self::bi('title', 150), 'email' => ['required', 'email'], 'github' => ['required', 'url'], 'linkedin' => ['required', 'url'], 'whatsapp' => ['required', 'url']],
            'seo' => [...self::bi('site_title', 120), ...self::bi('site_description', 300)],
            'stats' => ['items' => ['present', 'array', 'max:6'], 'items.*.value' => ['required', 'string', 'max:30'], ...self::bi('items.*.label', 80)],
            default => null,
        };
    }
    public static function sections(): array { return ['hero', 'about', 'contact', 'seo', 'stats']; }
}
