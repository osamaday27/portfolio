<?php
namespace App\Http\Requests;
use App\Enums\SkillLevel;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class SkillGroupRequest extends FormRequest {
    public function authorize(): bool { return true; }
    public function rules(): array {
        return [
            'key' => ['required', 'alpha_dash', 'max:40', Rule::unique('skill_groups', 'key')->ignore($this->route('skill_group'))],
            'title' => ['required', 'array'], 'title.en' => ['required', 'string', 'max:120'], 'title.ar' => ['required', 'string', 'max:120'],
            'sort_order' => ['integer', 'min:0'],
            'skills' => ['sometimes', 'array', 'max:60'], 'skills.*.name' => ['required', 'string', 'max:80'],
            'skills.*.level' => ['nullable', Rule::enum(SkillLevel::class)],
        ];
    }
}
