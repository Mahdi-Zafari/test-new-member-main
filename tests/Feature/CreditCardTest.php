<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\CreditCard;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CreditCardTest extends TestCase
{
    use RefreshDatabase;
    public function test_creditcard_index(): void
    {
        CreditCard::factory()->count(7)->create();
        $response = $this->get('/api/creditcards');
        $response->assertStatus(200);
        $response->assertJsonCount(7);
    }

    public function test_creditcard_store(): void
    {
        $data = CreditCard::factory()->make()->toArray();
        $response = $this->post('/api/creditcards', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('credit_cards', $data);
    }

    public function test_creditcard_update(): void
    {
        $data = CreditCard::factory()->make()->toArray();
        $creditcard = CreditCard::factory()->create();
        $response = $this->put("/api/creditcards/{$creditcard->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('credit_cards', [
            'id' => $creditcard->id,
        ]);
    }

    public function test_creditcard_delete(): void
    {
        $user = User::factory()->create();
        $creditcard = CreditCard::factory()->create(['user_id' => $user->id]);
        $response = $this->delete("/api/users/{$user->id}");
        $response->assertNoContent();
        $this->assertDatabaseMissing('users', ['id' => $user->id]);
        $this->assertDatabaseMissing('credit_cards', ['id' => $creditcard->id]);
    }
}
