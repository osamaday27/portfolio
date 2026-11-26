<?php
namespace App\Http\Requests;
use App\Enums\ImageType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class ImageRequest extends FormRequest {
    public function authorize(): bool { return true; }
    public function rules(): array {
        $creating = $this->isMethod('post');
        return [
            'image' => [$creating ? 'required' : 'prohibited', 'image', 'mimes:jpg,jpeg,png,webp', 'max:8192'],
            'type' => [$creating ? 'required' : 'sometimes', Rule::enum(ImageType::class)],
            'alt' => ['nullable', 'array'], 'alt.en' => ['nullable', 'string', 'max:200'], 'alt.ar' => ['nullable', 'string', 'max:200'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ];
    }
}
