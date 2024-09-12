<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use App\Http\Resources\StoryResource;
use Illuminate\Support\Facades\Storage;


class StoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $stories = Story::with('images')->get();
        return response()->json(StoryResource::collection($stories));
        // $stories = Story::with('images')->get();
        // return response()->json(['data' => StoryResource::collection($stories)]);
        // return StoryResource::Collection(Story::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $story = Story::create([
            "user_id" => $request->user()->id
        ]);

        if ($request->hasFile('image')) {
            $story->storeImage($request->file('image'));
        }

        return new StoryResource($story);
    }

    public function update(Request $request, Story $story)
    {
        $story->update($request->all());
        return new StoryResource($story);
    }

    public function destroy(Story $story)
    {
        $story->delete();
        return response()->json(null, 204);
    }

}
