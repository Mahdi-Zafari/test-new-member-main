<?php

namespace Tests\Feature;


use App\Events\UserLeft;
use App\Events\UserOnline;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class StatusOnlineTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_online_users()
{
    $user1=User::factory()->count(3)->create(['is_online' => false]);
    $user2= User::factory()->create(['is_online' => true]);
    $response = $this->get('/users/online-users');
    $response->assertStatus(200);
    $response->assertJsonCount(1);
    $m= User::where('is_online',false)->count();
    self::assertEquals(3,$m);
}
    public function test_set_user_online()
{
    $user = User::factory()->create(['is_online' => false]);
    $response = $this->put("/users/{$user->id}/online");
    $response->assertStatus(200);
    $this->assertDatabaseHas('users', ['id' => $user->id, 'is_online' => true]);
}
public function test_set_offline()
{
    $user = User::factory()->create(['is_online' => true]);
    $response = $this->put("/users/{$user->id}/offline");
    $response->assertStatus(200);
    $this->assertDatabaseHas('users', ['id' => $user->id, 'is_online' => false]);

}
public function test_event_is_broadcasted_when_user_is_online()
{
    Event::fake();
    $user = User::factory()->create(['is_online' => false]);
    $response = $this->put("/users/{$user->id}/online");
    Event::assertDispatched(UserOnline::class, function ($event) use ($user) {
        return $event->user->id === $user->id;
    });
}
public function test_event_is_broadcasted_when_user_is_offline()
{
    Event::fake();
    $user = User::factory()->create(['is_online' => true]);
    $response = $this->put("/users/{$user->id}/offline");
    Event::assertDispatched(UserLeft::class, function ($event) use ($user) {
        return $event->user->id === $user->id;
    });
}

}
