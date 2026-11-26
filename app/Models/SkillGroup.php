<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class SkillGroup extends Model {
    protected $fillable = ['key', 'title', 'sort_order'];
    protected function casts(): array { return ['title' => 'array']; }
    public function skills(): HasMany { return $this->hasMany(Skill::class)->orderBy('sort_order'); }
}
