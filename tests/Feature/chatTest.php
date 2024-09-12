<?php

namespace Tests\Feature;

use App\Events\MessageSent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class chatTest extends TestCase
{
    use RefreshDatabase;
    public function test_can_store_a_message()
    {
        $user =User::factory()->create();
        $this->actingAs($user);

        $receiverId =User::factory()->create()->id;
        $body = 'Test message body';
        Event::fake([MessageSent::class]);
        $response = $this->post('/send-message', [
            'sender_id'=>$user->id,
            'receiver_id' => $receiverId,
            'body' => $body,
        ]);
        $response->assertStatus(201);

        $this->assertDatabaseHas('messages', [
            'sender_id' => $user->id,
            'receiver_id' => $receiverId,
            'body' => $body,
        ]);
        Event::assertDispatched(MessageSent::class, function ($event) use ($receiverId, $body) {
            $this->assertInstanceOf(Message::class, $event->message);
            return $event->message->receiver_id === $receiverId &&
                   $event->message->body === $body;
        });


    }
}
