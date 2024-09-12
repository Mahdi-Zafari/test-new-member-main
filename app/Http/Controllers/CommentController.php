<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use App\Traits\ClassModelTrait;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    use ClassModelTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $comments = Comment::with('user')->get();
        return response()->json(CommentResource::collection($comments));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data=$request->validate(['commentable_id'=>'required','commentable_type'=>'required|string','body'=>'required|string']);
        $model = $this->makeClassModel($data['commentable_type']);

        if (!$model) {
            return response()->json(['error' => 'commentable not found'], 404);
        }
        $data['commentable_type']=$model;
        $data['user_id'] = $request->user()->id;
        return new CommentResource(Comment::create($data));
    }

    public function update(Request $request, Comment $comment)
    {
        $comment->update($request->all());
        return new CommentResource($comment);
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json(null, 204);
    }
}
