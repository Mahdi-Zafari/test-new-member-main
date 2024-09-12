<?php

namespace Tests\Feature;

use App\Models\Blog;
use App\Models\Image;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class HasImageTest extends TestCase
{
    use refreshDatabase;
    public function test_stores_image_on_creation()
    {
        Storage::fake('public');
        $blog = Blog::factory()->create();

        $imageFile = UploadedFile::fake()->image('test-image3.jpg');
        $blog->storeImage($imageFile);

        $image = Image::factory()->create(['imageable_id' => $blog->id, 'imageable_type' => Blog::class]);
        $response = $this->getJson(route('blogs.index'));

        $response->assertStatus(200);

        Storage::disk('public')->assertExists('images/' . $imageFile->hashName());

}}
