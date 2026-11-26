<?php
namespace App\Observers;
use App\Support\PublicCache;
class PublicCacheObserver {
    public function saved(): void { PublicCache::flush(); }
    public function deleted(): void { PublicCache::flush(); }
    public function restored(): void { PublicCache::flush(); }
}
