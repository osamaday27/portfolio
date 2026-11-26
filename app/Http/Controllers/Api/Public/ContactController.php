<?php
namespace App\Http\Controllers\Api\Public;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactReceived;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Mail;
class ContactController extends Controller {
    public function store(ContactRequest $request) {
        $message = ContactMessage::create($request->validated()); // stored first: nothing is lost if mail fails
        if ($to = config('portfolio.admin_email')) Mail::to($to)->queue(new ContactReceived($message));
        return response()->json(['message' => 'received'], 201);
    }
}
