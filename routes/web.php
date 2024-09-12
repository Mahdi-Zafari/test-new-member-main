<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\StatusOnlineController;
use Illuminate\Support\Facades\Route;


// Route::get('/', function () {
//     return view('app');
// });
// Route::any('{any}', function () {
//     return view('app');
// })->where('any', '.*');

Route::fallback(function () {
    return view('app');
});

Route::get('/users/online-users', [StatusOnlineController::class, 'getOnlineUsers'])->name('online.users');
Route::put('/users/{user}/online', [StatusOnlineController::class, 'setOnline'])->name('user.online');
Route::put('/users/{user}/offline', [StatusOnlineController::class, 'setOffline'])->name('user.offline');
Route::post('/send-message', [MessageController::class, 'sendMessage'])->middleware('auth');
// Route::get('/get-messages', [ChatController::class, 'getMessages'])->middleware('auth');


