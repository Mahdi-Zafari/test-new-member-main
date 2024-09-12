<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Comment;
use App\Http\Resources\CommentResource;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CommentResourceTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_return_a_collection_of_comment_resources()
    {
        $user = User::factory()->create();
        $comments = Comment::factory()->count(3)->create(['user_id' => $user->id]);
        $response = $this->getJson(route('comments.index'));
        $response->assertStatus(200)
            ->assertJsonStructure([
                    '*' => [
                        'id',
                        'body',
                        'createdAt',
                        'user' => [
                            'id',
                            'name',
                        ],
                        'commentableId',
                        'commentableType',
                    ],

            ]);
        }


}
