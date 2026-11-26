<?php
namespace App\Services;
use GdImage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
/** Converts uploads to WebP with GD (no extra package). SVG is intentionally never accepted (XSS). */
class ImageService {
    public function storeWebp(UploadedFile $file, string $dir, int $maxWidth = 1920, int $quality = 82): string {
        return $this->put($this->scale($this->read(file_get_contents($file->getRealPath())), $maxWidth), $dir, $quality);
    }
    public function makeThumb(string $path, int $width = 640): string {
        $binary = Storage::disk('public')->get($path);
        return $this->put($this->scale($this->read($binary), $width), 'thumbs', 78);
    }
    public function delete(?string ...$paths): void {
        $paths = array_filter($paths);
        if ($paths) Storage::disk('public')->delete($paths);
    }
    private function read(string $binary): GdImage {
        $img = @imagecreatefromstring($binary);
        if (! $img) throw ValidationException::withMessages(['image' => 'Unsupported or corrupted image.']);
        imagepalettetotruecolor($img); imagealphablending($img, false); imagesavealpha($img, true);
        return $img;
    }
    private function scale(GdImage $img, int $maxWidth): GdImage {
        if (imagesx($img) <= $maxWidth) return $img;
        return imagescale($img, $maxWidth, -1, IMG_BICUBIC) ?: $img;
    }
    private function put(GdImage $img, string $dir, int $quality): string {
        ob_start(); imagewebp($img, null, $quality); $bin = ob_get_clean();
        $path = $dir.'/'.Str::uuid().'.webp';
        Storage::disk('public')->put($path, $bin);
        return $path;
    }
}
