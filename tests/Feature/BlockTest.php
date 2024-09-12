<?php

namespace Tests\Feature;

use App\Models\Block;
use App\Models\Blog;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BlockTest extends TestCase
{
    use RefreshDatabase;
    public function test_block_index(): void
    {
        $response = $this->get('/api/blocks');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => ['id', 'blockable_type', 'blockable_id', 'created_at', 'updated_at'],
        ]);
    }

    public function test_block_store(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        $blog=Blog::factory()->create();
        $response = $this->postJson('/api/blocks', [
            'user_id' => $user->id,
            'blockable_id' =>$blog->id,
            'blockable_type' => 'Blog'
        ]);
        $response->assertStatus(201);
        $this->assertDatabaseHas('blocks', [
            'user_id' => $user->id,
            'blockable_id' => $blog->id,
            'blockable_type' => 'App\Models\Blog'
        ]);
    }

    public function test_block_update(): void
    {
        $data = Block::factory()->make()->toArray();
        $block = Block::factory()->create();
        $response = $this->put("/api/blocks/{$block->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('blocks', [
            'id' => $block->id,
        ]);
    }

    public function test_block_delete(): void
    {
        $block = Block::factory()->create();
        $response = $this->delete("/api/blocks/{$block->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('blocks', [
            'id' => $block->id,
        ]);
    }
}
