<?php
namespace App\Jobs;
use App\Models\ProjectImage;
use App\Services\ImageService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\{InteractsWithQueue, SerializesModels};
class GenerateThumbnail implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public int $tries = 3;
    public function __construct(public ProjectImage $image) { $this->afterCommit(); }
    public function handle(ImageService $images): void {
        $this->image->update(['thumb_path' => $images->makeThumb($this->image->path)]);
    }
}
