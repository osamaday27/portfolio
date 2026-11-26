<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class ProjectImageResource extends JsonResource {
    public function toArray($request): array {
        return ['id' => $this->id, 'type' => $this->type, 'url' => $this->url(), 'thumb_url' => $this->thumbUrl(), 'alt' => $this->alt, 'sort_order' => $this->sort_order];
    }
}
