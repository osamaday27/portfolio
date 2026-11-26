<?php
namespace App\Actions;
use App\Enums\ImageType;
use App\Jobs\GenerateThumbnail;
use App\Models\{Project, ProjectImage};
use App\Services\ImageService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
class StoreProjectImageAction {
    public function __construct(private ImageService $images) {}
    public function __invoke(Project $project, UploadedFile $file, ImageType $type, ?array $alt = null): ProjectImage {
        $path = $this->images->storeWebp($file, "projects/{$project->slug}");
        $image = DB::transaction(function () use ($project, $type, $path, $alt) {
            // one cover per project: replacing it removes the old row (files are cleaned by the model event)
            if ($type === ImageType::Cover) $project->images()->where('type', 'cover')->get()->each->delete();
            return $project->images()->create([
                'type' => $type->value, 'path' => $path, 'alt' => $alt,
                'sort_order' => (int) $project->images()->max('sort_order') + 1,
            ]);
        });
        GenerateThumbnail::dispatch($image);
        return $image;
    }
}
