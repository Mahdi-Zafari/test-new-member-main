<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $blogs = Blog::with('image')->get();
        return response()->json(BlogResource::collection($blogs));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'image' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Example validation for image upload
        ]);
        $blog = Blog::create($request->except('image'));

        if ($request->hasFile('image')) {
            $blog->storeImage($request->file('image'));
        }

        return new BlogResource($blog);
    }

    public function update(Request $request, Blog $blog)
    {
        $blog->update($request->all());
        return new BlogResource($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(null, 204);
    }

}
