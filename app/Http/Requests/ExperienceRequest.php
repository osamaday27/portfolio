<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class ExperienceRequest extends FormRequest {
    public function authorize(): bool { return true; }
    public function rules(): array {
        return [
            'company' => ['required', 'string', 'max:150'],
            'title' => ['required', 'array'], 'title.en' => ['required', 'string', 'max:150'], 'title.ar' => ['required', 'string', 'max:150'],
            'description' => ['nullable', 'array'], 'description.en' => ['nullable', 'string', 'max:3000'], 'description.ar' => ['nullable', 'string', 'max:3000'],
            'start_date' => ['required', 'date'], 'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'sort_order' => ['integer', 'min:0'],
        ];
    }
}
