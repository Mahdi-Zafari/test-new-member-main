<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Transaction;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TransactionTest extends TestCase
{
    use RefreshDatabase;
    public function test_transaction_index(): void
    {
        // Transaction::truncate();
        Transaction::factory()->count(8)->create();
        $response = $this->get('/api/transactions');
        $response->assertStatus(200);
        $response->assertJsonCount(8);
    }

    public function test_transaction_store(): void
    {
        $data = Transaction::factory()->make()->toArray();
        Transaction::create($data);
        $this->assertDatabaseHas('transactions', $data);
        $response = $this->post('/api/transactions', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('transactions', $data);
    }

    public function test_transaction_update(): void
    {
        $data = Transaction::factory()->make()->toArray();
        $transaction = Transaction::factory()->create();
        $response = $this->put("/api/transactions/{$transaction->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('transactions', [
            'id' => $transaction->id,
        ]);
    }

    public function test_transaction_delete(): void
    {
        $transaction = Transaction::factory()->create();
        $response = $this->delete("/api/transactions/{$transaction->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('transactions', [
            'id' => $transaction->id,
        ]);
    }
}