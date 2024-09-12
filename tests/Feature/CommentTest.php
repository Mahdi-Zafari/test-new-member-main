<?php

namespace Tests\Feature;

use App\Models\Blog;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;
    public function test_comment_relation_with_user()
    {
        $comment = Comment::factory()->for(User::factory())->create();
        $this->assertTrue(isset($comment->user->id));
        $this->assertTrue($comment->user instanceof User);
    }
    // public function test_comment_relation_with_blog()
    // {
    //     $user = User::factory()->create();
    //     $blog = Blog::create([
    //         'body' => 'This is a test blog post.'
    //     ]);
    //     Comment::create([
    //         'body' => 'This is a test comment.',
    //         'commentable_type' => Blog::class,
    //         'commentable_id' => $blog->id,
    //         'user_id' => $user->id() // Assuming you have authentication and each comment is associated with a user
    //     ]);
    //     $blogWithComments = Blog::with('comments')->find($blog->id);
    //     $blogWithComments->comments;
    //     $this->assertTrue($blogWithComments->comments instanceof Comment);
    //     // $comment = Comment::factory()->for(Blog::factory())->create();
    //     // $this->assertTrue(isset($comment->blog->id));
    //     // $this->assertTrue($comment->blog instanceof Blog);
    // }
    public function test_comment_index(): void
    {
        Comment::truncate();
        Comment::factory()->count(1)->create();
        $response = $this->get('/api/comments');
        $response->assertStatus(200);
        $response->assertJsonCount(1);
    }

    public function test_comment_store(): void
    {
        $post = Post::factory()->create();
        $user = User::factory()->create();
        $this->actingAs($user);
        $data = [
            'commentable_type' =>'Post',
            'commentable_id' => $post->id,
            'body' => 'this is a test',
            'user_id'=>$user->id,
        ];
        $response = $this->post('/api/comments', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('comments', [
            'commentable_type' => 'App\Models\Post',
            'commentable_id' => $post->id,
            'body' => 'this is a test',
            'user_id'=>$user->id

        ]);
    }

    public function test_comment_update(): void
    {
        $data = Comment::factory()->make()->toArray();
        $comment = Comment::factory()->create();
        $response = $this->put("/api/comments/{$comment->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('comments', [
            'id' => $comment->id,
        ]);
    }

    public function test_comment_delete(): void
    {
        $comment = Comment::factory()->create();
        $response = $this->delete("/api/comments/{$comment->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('comments', [
            'id' => $comment->id,
        ]);
    }
}
