<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Image;
use App\Models\Story;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StoryResourceTest extends TestCase
{
    use RefreshDatabase;
    public function test_can_return_a_collection_of_story_resources()
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $story = Story::factory()->create(['user_id' => $user->id]);

        $imageFile = UploadedFile::fake()->image('test-image.jpg');
        $story->storeImage($imageFile);

        $response = $this->getJson(route('stories.index'));

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'user',
                    'created_at',
                    'image'
                ]

            ]);
    }
    protected function assertStorageContains($url)
    {
        $image = str_replace('/storage/', '', $url);
        $this->assertTrue(Storage::disk('public')->exists($image['url']));
    }
}
