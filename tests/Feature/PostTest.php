<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_post_index(): void
    {
        Post::truncate();
        Post::factory()->count(2)->create();
        $response = $this->get('/api/posts');
        $response->assertStatus(200);
        $response->assertJsonCount(2);
    }

    public function test_post_store(): void
    {
        $this->actingAs($user = User::factory()->create());
        Storage::fake("public");
        $data = \Arr::except(Post::factory()->definition(), ['user_id']) +
            ['image' => UploadedFile::fake()->image('image.jpg')];
        $response = $this->post('/api/posts', $data);
        $response->assertStatus(201);
        Storage::disk("public")->assertExists(Post::find($response->json("id"))->image->url);
        $this->assertDatabaseHas('posts', [
            'user_id' => $user->id,
            "body" => $data["body"],
        ]);
    }

    public function test_post_update(): void
    {
        $data = Post::factory()->make()->toArray();
        $post = Post::factory()->create();
        $response = $this->put("/api/posts/{$post->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('posts', [
            'id' => $post->id,
        ]);
    }

    public function test_post_delete(): void
    {
        $post = Post::factory()->create();
        $response = $this->delete("/api/posts/{$post->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('posts', [
            'id' => $post->id,
        ]);
    }
}
