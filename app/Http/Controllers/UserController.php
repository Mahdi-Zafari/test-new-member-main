<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $users = User::with('images')->get();
        return response()->json(UserResource::collection($users));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create($request->except('image'));
        if ($request->hasFile('image')) {
            $user->storeImage($request->file('image'));
        }

        return new UserResource($user);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
    public function uploadImage(Request $request){
            $user = Auth::user();

            if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = Storage::disk('public')->put('images', $image);

            $user->storeImage($request->file('image'));

            return response()->json(['message' => 'image uploaded'], 200);
            }
            return response()->json(['message' => 'image not uploaded'], 400);
    }
    public function deleteImage($id){
        $user = Auth::user();
        $image = $user->images()->find($id);

        if ($image) {
            Storage::delete($image->url);
            $image->delete();
            return response()->json(['message' => 'Image deleted'], 200);
        } else {
            return response()->json(['message' => 'Image not found'], 404);
        }
    }



}
