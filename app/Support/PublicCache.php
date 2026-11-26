<?php
namespace App\Support;
use Closure;
use Illuminate\Support\Facades\Cache;
/** Versioned cache: works on every driver (no tags needed). Any content change bumps the version. */
final class PublicCache {
    public static function remember(string $name, Closure $callback): mixed {
        $v = Cache::get('public.version', 1);
        return Cache::rememberForever("public.{$name}.v{$v}", $callback);
    }
    public static function flush(): void { Cache::add('public.version', 1); Cache::increment('public.version'); }
}
