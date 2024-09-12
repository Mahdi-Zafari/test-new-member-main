<?php

namespace Tests\Feature;

use App\Models\Story;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class StoryTest extends TestCase
{
    use RefreshDatabase;
    public function test_story_index(): void
    {
        Story::truncate();
        Story::factory()->count(1)->create();
        $response = $this->get('/api/stories');
        $response->assertStatus(200);
        $response->assertJsonCount(1);
    }

    public function test_story_store(): void
    {
        $this->actingAs(User::factory()->create());
        Storage::fake("public");
        $this->post('/api/stories', [
            'image' => $image = UploadedFile::fake()->image('image.jpg'),
        ])->assertStatus(201);
        $this->assertDatabaseHas('stories', [
            'user_id' => auth()->id(),
        ]);
        $this->assertDatabaseHas('images', [
            'imageable_type' => Story::class,
            "imageable_id" => Story::first()->id,
            'url' => 'images/' . $image->hashName(),
        ]);
        Storage::disk('public')->assertExists('images/' . $image->hashName());

    }

    public function test_story_update(): void
    {
        $data = Story::factory()->make()->toArray();
        $story = Story::factory()->create();
        $response = $this->put("/api/stories/{$story->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('stories', [
            'id' => $story->id,
        ]);
    }

    public function test_story_delete(): void
    {
        $story = Story::factory()->create();
        $response = $this->delete("/api/stories/{$story->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('stories', [
            'id' => $story->id,
        ]);
    }
}
