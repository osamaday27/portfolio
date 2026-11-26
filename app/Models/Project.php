<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
class Project extends Model {
    use SoftDeletes;
    public const CASE_STUDY_SECTIONS = ['overview', 'problem', 'objectives', 'role', 'architecture', 'database', 'features', 'challenges', 'solutions'];
    protected $fillable = ['slug', 'repo', 'title', 'description', 'categories', 'stack', 'case_study', 'github_url', 'demo_url', 'is_published', 'is_featured', 'sort_order'];
    protected function casts(): array {
        return ['title' => 'array', 'description' => 'array', 'categories' => 'array', 'stack' => 'array', 'case_study' => 'array',
                'is_published' => 'boolean', 'is_featured' => 'boolean'];
    }
    public function images(): HasMany { return $this->hasMany(ProjectImage::class)->orderBy('sort_order')->orderBy('id'); }
    public function scopePublished(Builder $q): Builder { return $q->where('is_published', true); }
    protected static function booted(): void { static::forceDeleting(fn (Project $p) => $p->images->each->delete()); }
}
