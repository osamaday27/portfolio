<?php
namespace App\Http\Controllers\Api\Admin;
use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
class MessageController extends Controller {
    public function index() { return ContactMessage::latest()->paginate(20); }
    public function read(ContactMessage $message) { $message->update(['read_at' => now()]); return $message; }
    public function destroy(ContactMessage $message) { $message->delete(); return response()->noContent(); }
}
