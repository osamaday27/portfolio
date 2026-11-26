<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class ProjectResource extends JsonResource {
    public function toArray($request): array {
        $images = $this->whenLoaded('images');
        return [
            'id' => $this->id, 'slug' => $this->slug, 'repo' => $this->repo, 'title' => $this->title, 'description' => $this->description,
            'categories' => $this->categories, 'stack' => $this->stack, 'case_study' => $this->case_study,
            'github_url' => $this->github_url, 'demo_url' => $this->demo_url,
            'is_published' => $this->is_published, 'is_featured' => $this->is_featured, 'sort_order' => $this->sort_order,
            'cover_url' => $this->whenLoaded('images', fn () => $this->images->firstWhere('type', 'cover')?->url()),
            'images' => ProjectImageResource::collection($images),
        ];
    }
}
