<?php
namespace App\Http\Requests;
use App\Enums\ProjectCategory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
class ProjectRequest extends FormRequest {
    public function authorize(): bool { return true; } // gated by the 'can:manage-site' route middleware
    protected function prepareForValidation(): void {
        if (! $this->filled('slug') && $this->filled('repo')) $this->merge(['slug' => Str::slug($this->input('repo'))]);
    }
    public function rules(): array {
        $p = $this->route('project');
        return [
            'repo' => ['required', 'string', 'max:100'],
            'slug' => ['required', 'string', 'max:120', 'alpha_dash', Rule::unique('projects', 'slug')->ignore($p)],
            'title' => ['required', 'array'], 'title.en' => ['required', 'string', 'max:150'], 'title.ar' => ['required', 'string', 'max:150'],
            'description' => ['nullable', 'array'], 'description.en' => ['nullable', 'string', 'max:1000'], 'description.ar' => ['nullable', 'string', 'max:1000'],
            'categories' => ['required', 'array', 'min:1'], 'categories.*' => [Rule::enum(ProjectCategory::class)],
            'stack' => ['present', 'array', 'max:30'], 'stack.*' => ['string', 'max:50'],
            'case_study' => ['nullable', 'array'], 'case_study.*' => ['array'],
            'case_study.*.en' => ['nullable', 'string', 'max:8000'], 'case_study.*.ar' => ['nullable', 'string', 'max:8000'],
            'github_url' => ['nullable', 'url', 'max:255'], 'demo_url' => ['nullable', 'url', 'max:255'],
            'is_published' => ['boolean'], 'is_featured' => ['boolean'], 'sort_order' => ['integer', 'min:0'],
        ];
    }
}
