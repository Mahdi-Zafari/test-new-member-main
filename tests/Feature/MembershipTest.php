<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Membership;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MembershipTest extends TestCase
{
    use RefreshDatabase;
    public function test_membership_index(): void
    {
        Membership::factory()->count(7)->create();
        $response = $this->get('/api/memberships');
        $response->assertStatus(200);
        $response->assertJsonCount(7);
    }

    public function test_membership_store(): void
    {
        $userId = User::factory()->create()->id;
        $response = $this->post('/api/memberships', [
            'user_id' => $userId,
            'expired_date' => '2022-01-01',
            'type' => 'silver'
        ]);
        $response->assertStatus(201);
        self::assertDatabaseHas('memberships', [
            'user_id' => $userId,
            'expired_date' => '2022-01-01',
            'type' => 'silver'
        ]);
    }

    public function test_membership_update(): void
    {
        $userId = User::factory()->create()->id;
        $membership = Membership::factory()->create();
        $response = $this->put("/api/memberships/{$membership->id}", [
            'id' => $membership->id,
            'user_id' => $userId,
            'expired_date' => '2020-01-01',
            'type' => 'gold',
        ]);
        $response->assertStatus(200);
        self::assertDatabaseHas('memberships', [
            'id' => $membership->id,
            'user_id' => $userId,
            'expired_date' => '2020-01-01',
            'type' => 'gold',
        ]);
    }

    public function test_membership_delete(): void
    {
        $membership = Membership::factory()->create();
        $response = $this->delete("/api/memberships/{$membership->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('memberships', [
            'id' => $membership->id,
        ]);
    }
}
