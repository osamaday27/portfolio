<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class SkillGroupResource extends JsonResource {
    public function toArray($request): array {
        return ['id' => $this->id, 'key' => $this->key, 'title' => $this->title, 'sort_order' => $this->sort_order,
            'skills' => $this->skills->map(fn ($s) => ['name' => $s->name, 'level' => $s->level])->values()];
    }
}
