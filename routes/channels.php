<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('online-users', function ($user) {
    return $user != null;
});

Broadcast::channel('online', function ($user) {
    return ['id' => $user->id, 'name' => $user->name];
});
Broadcast::channel('chat.{receiverId}', function ($user, $receiverId) {
    if ($user->id == $receiverId) {
        return ['id' => $user->id, 'name' => $user->name];
    }
});
// Broadcast::channel('offline', function ($user) {
//     return ['id' => $user->id, 'name' => $user->name];
// });
