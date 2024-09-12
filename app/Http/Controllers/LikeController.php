<?php

namespace App\Http\Controllers;

use App\Http\Resources\LikeResource;
use App\Models\Like;
use App\Traits\ClassModelTrait;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    use ClassModelTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return LikeResource::Collection(Like::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data=$request->validate(['likeable_id'=>'required','likeable_type'=>'required|string']);
        $model = $this->makeClassModel($data['likeable_type']);
        if (!$model) {
            return response()->json(['error' => 'likeable not found'], 404);
        }
        $data['likeable_type']=$model;
        $data['user_id'] = $request->user()->id;
        return new LikeResource(Like::create($data));
    }

    public function update(Request $request, Like $like)
    {
        $like->update($request->all());
        return new  LikeResource($like);
    }

    public function destroy(Like $like)
    {
        $like->delete();
        return response()->json(null, 204);
    }
}
