<?php

namespace App\Http\Controllers;

use App\Events\UserLeft;
use App\Events\UserOnline;
use App\Models\User;
use Illuminate\Http\Request;

class StatusOnlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getOnlineUsers()
    {
        $users = User::where('is_online', true)->get();
        return response()->json($users);
    }
    public function setOnline(User $user)
    {
        $user->update(['is_online' => true]);
        broadcast(new UserOnline($user));
        return response()->json(['message' => 'user is online']);
    }

    public function setOffline(User $user)
    {
        $user->update(['is_online' => false]);

        broadcast(new UserLeft($user));
        return response()->json(['message' => 'user is offline']);
    }




}
