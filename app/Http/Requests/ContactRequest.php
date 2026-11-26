<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class ContactRequest extends FormRequest {
    public function authorize(): bool { return true; }
    public function rules(): array {
        return [
            'name' => ['required', 'string', 'max:120'], 'email' => ['required', 'email', 'max:190'],
            'subject' => ['required', 'string', 'max:200'], 'message' => ['required', 'string', 'min:10', 'max:5000'],
            'type' => ['required', 'in:fullstack,backend,it,project,collab,other'],
        ];
    }
}
