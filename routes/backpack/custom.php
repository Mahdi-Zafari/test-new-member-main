<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckIfAdmin;
use Illuminate\Support\Facades\Route;


// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix' => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    // 'middleware' => ['web', 'CheckIfAdmin'],
    'namespace' => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('post', 'PostCrudController');
    Route::crud('block', 'BlockCrudController');
    Route::crud('blog', 'BlogCrudController');
    Route::crud('comment', 'CommentCrudController');
    Route::crud('credit-card', 'CreditCardCrudController');
    Route::crud('image', 'ImageCrudController');
    Route::crud('like', 'LikeCrudController');
    Route::crud('membership', 'MembershipCrudController');
    Route::crud('message', 'MessageCrudController');
    Route::crud('notification', 'NotificationCrudController');
    Route::crud('report', 'ReportCrudController');
    Route::crud('setting', 'SettingCrudController');
    Route::crud('story', 'StoryCrudController');
    Route::crud('transaction', 'TransactionCrudController');
    Route::crud('user', 'UserCrudController');
}); // this should be the absolute last line of this file
