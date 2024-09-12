<?php

namespace Tests\Feature;

use App\Models\Message;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MessageTest extends TestCase
{
    use RefreshDatabase;
    public function test_message_relationship_with_user()
    {
        $message = Message::factory()->create();
        $this->assertTrue(isset($message->sender->id));
        $this->assertTrue($message->receiver instanceof User);
    }
    public function test_message_index(): void
    {
        Message::truncate();
        Message::factory()->count(8)->create();
        $response = $this->get('/api/messages');
        $response->assertStatus(200);
        $response->assertJsonCount(8);
    }

    public function test_message_store(): void
    {
        $data = Message::factory()->make()->toArray();
        $response = $this->post('/api/messages', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('messages', $data);
    }

    public function test_message_update(): void
    {
        $data = Message::factory()->make()->toArray();
        $message = Message::factory()->create();
        $response = $this->put("/api/messages/{$message->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('messages', [
            'id' => $message->id,
        ]);
    }

    public function test_message_delete(): void
    {
        $message = Message::factory()->create();
        $response = $this->delete("/api/messages/{$message->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('messages', [
            'id' => $message->id,
        ]);
    }
}