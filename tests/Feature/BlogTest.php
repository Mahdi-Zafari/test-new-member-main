<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlogTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_blog_index(): void
    {
        Blog::factory()->count(2)->create();
        $response = $this->get('/api/blogs');
        $response->assertStatus(200);
        $response->assertJsonCount(2);
    }

    public function test_blog_store(): void
    {

        Storage::fake('public');

        $data = [
            'title' => 'Test Blog',
            'body' => 'This is a test blog post.',
            'image' => UploadedFile::fake()->image('test-image.jpg'),
        ];
        $response = $this->post(route('blogs.store'), $data);
        $response->assertStatus(201);
        $this->assertDatabaseHas('blogs', ['title' => 'Test Blog']);
        $this->assertDatabaseCount('images', 1);

    }

    public function test_blog_update(): void
    {
        $data = Blog::factory()->make()->toArray();
        $blog = Blog::factory()->create();
        $response = $this->put("/api/blogs/{$blog->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('blogs', [
            'id' => $blog->id,
        ]);
    }

    public function test_blog_delete(): void
    {
        $blog = Blog::factory()->create();
        $response = $this->delete("/api/blogs/{$blog->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('blogs', [
            'id' => $blog->id,
        ]);
    }
}
