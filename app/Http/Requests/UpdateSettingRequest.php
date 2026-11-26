<?php
namespace App\Http\Requests;
use App\Support\SettingSchema;
use Illuminate\Foundation\Http\FormRequest;
class UpdateSettingRequest extends FormRequest {
    public function authorize(): bool { return true; }
    public function rules(): array { return SettingSchema::rules((string) $this->route('section')) ?? abort(404, 'Unknown section'); }
}
