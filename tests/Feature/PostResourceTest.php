<?php

namespace Tests\Feature;

use App\Http\Resources\PostResource;
use App\Models\Image;
use App\Models\Post;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;
use Tests\TestCase;

class PostResourceTest extends TestCase
{
    use RefreshDatabase;

    public function testPostResourceStructure()
    {
        Post::factory(3)
            ->has(Image::factory())
            ->create();
        $response = $this->getJson(route('posts.index'));
        $response->assertStatus(200)
            ->assertJsonCount(3)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'user',
                    "body",
                    'created_at',
                    'image' => [
                        'id',
                        "url"
                    ]
                ]
            ]);
    }
}
