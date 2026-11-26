<?php
namespace App\Mail;
use App\Models\ContactMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\{Address, Content, Envelope};
use Illuminate\Queue\SerializesModels;
class ContactReceived extends Mailable implements ShouldQueue {
    use Queueable, SerializesModels;
    public function __construct(public ContactMessage $contact) {}
    public function envelope(): Envelope {
        return new Envelope(subject: '[Portfolio] '.$this->contact->subject, replyTo: [new Address($this->contact->email, $this->contact->name)]);
    }
    public function content(): Content {
        $c = $this->contact;
        return new Content(htmlString: nl2br(e("From: {$c->name} <{$c->email}>\nType: {$c->type}\n\n{$c->message}")));
    }
}
