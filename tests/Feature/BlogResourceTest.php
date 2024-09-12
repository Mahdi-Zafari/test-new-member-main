<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Blog;
use App\Models\User;
use App\Models\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlogResourceTest extends TestCase
{
    use RefreshDatabase;
    public function test_blogresource()
    {
        Storage::fake('public');
        $blog = Blog::factory()->create();

        $imageFile = UploadedFile::fake()->image('test-image1.jpg');
        $blog->storeImage($imageFile);

        $image = Image::factory()->create(['imageable_id' => $blog->id, 'imageable_type' => Blog::class]);
        $response = $this->getJson(route('blogs.index'));

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'title',

                    'image' => [
                        'url',
                    ],
                    'body'



                ]
            ]);
    }
    protected function assertStorageContains($url)
    {
        $image = str_replace('/storage/', '', $url);
        $this->assertTrue(Storage::disk('public')->exists($image['url']));
    }
}
