<?php
namespace App\Models;
use App\Services\ImageService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
class ProjectImage extends Model {
    protected $fillable = ['project_id', 'type', 'path', 'thumb_path', 'alt', 'sort_order'];
    protected function casts(): array { return ['alt' => 'array']; }
    public function project(): BelongsTo { return $this->belongsTo(Project::class); }
    public function url(): string { return Storage::disk('public')->url($this->path); }
    public function thumbUrl(): string { return Storage::disk('public')->url($this->thumb_path ?: $this->path); }
    protected static function booted(): void {
        static::deleted(fn (ProjectImage $i) => app(ImageService::class)->delete($i->path, $i->thumb_path));
    }
}
