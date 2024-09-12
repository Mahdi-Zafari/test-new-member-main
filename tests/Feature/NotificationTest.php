<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Notification;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NotificationTest extends TestCase
{
    use RefreshDatabase;
    public function test_notification_index(): void
    {
        Notification::factory()->count(7)->create();
        $response = $this->get('/api/notifications');
        $response->assertStatus(200);
        $response->assertJsonCount(7);
    }

    public function test_notification_store(): void
    {
        $data = Notification::factory()->make()->toArray();
        $response = $this->post('/api/notifications', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('notifications', $data);
    }

    public function test_notification_update(): void
    {
        $data = Notification::factory()->make()->toArray();
        $notification = Notification::factory()->create();
        $response = $this->put("/api/notifications/{$notification->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('notifications', [
            'id' => $notification->id,
        ]);
    }

    public function test_notification_delete(): void
    {
        $notification = Notification::factory()->create();
        $response = $this->delete("/api/notifications/{$notification->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('notifications', [
            'id' => $notification->id,
        ]);
    }
}
