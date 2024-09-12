<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::with('user')->get();
        return response()->json(PostResource::collection($posts));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $imageFieldName = $this->getFileInputName($request);
        $post = Post::create($request->validate([
            "body" => "string",
        ]) + [
            "user_id" => $request->user()->id
        ]);

        if ($request->hasFile('image')) {
            $post->storeImage($request->file('image'));
        }

        return new PostResource($post);
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(null, 204);
    }
    // protected function getFileInputName(Request $request)
    // {
    //     $fileInputs = array_keys($request->file());
    //     return count($fileInputs) > 0 ? $fileInputs[0] : null;
    // }
}
