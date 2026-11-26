<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class ExperienceResource extends JsonResource {
    public function toArray($request): array {
        return ['id' => $this->id, 'company' => $this->company, 'title' => $this->title, 'description' => $this->description,
            'start_date' => $this->start_date->format('Y-m'), 'end_date' => $this->end_date?->format('Y-m'), 'sort_order' => $this->sort_order];
    }
}
