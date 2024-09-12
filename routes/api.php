<?php

use App\Http\Controllers\MemberAttributeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\CreditCardController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MembershipController;
use App\Http\Controllers\TransactionController;
use Illuminate\Session\Middleware\StartSession;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\StoryController;
use App\Http\Resources\LikeResource;
use App\Models\MemberAttribute;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register'])->middleware("web");
Route::post('/login', [AuthController::class, 'login'])->middleware("web");
Route::delete('/logout', [AuthController::class, 'logout']);
Route::get('/user', [AuthController::class, 'user'])
    ->middleware('auth:sanctum')
    ->name('auth.user');
;
Route::get('/forgot-password', [AuthController::class, 'showLinkRequestForm'])->middleware('guest')->name('password.request');
Route::post('/forgot-password', [AuthController::class, 'sendResetLinkEmail'])->middleware('guest')->name('password.email');
Route::get('/reset-password/{token}', [AuthController::class, 'showResetForm'])->middleware('guest')->name('password.reset');
Route::post('/reset-password', [AuthController::class, 'reset'])->middleware('guest')->name('password.update');

Route::post('/upload-image', [UserController::class, 'uploadImage'])->name('upload.image');
Route::delete('/delete-image/{id}', [UserController::class, 'deleteImage'])->name('delete.image');
// Route::group(['middleware' => ['auth:sanctum', StartSession::class]], function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
// });

Route::apiResources([
    'users' => UserController::class,
    'comments' => CommentController::class,
    'blogs' => BlogController::class,
    'messages' => MessageController::class,
    'creditcards' => CreditCardController::class,
    'memberships' => MembershipController::class,
    'notifications' => NotificationController::class,
    'settings' => SettingController::class,
    'transactions' => TransactionController::class,
    'stories' => StoryController::class,
    'likes' => LikeController::class,
    'blocks' => BlockController::class,
    'reports' => ReportController::class,
    'posts' => PostController::class,
]);

// Route::apiResource('posts', PostController::class)->middleware('auth');
