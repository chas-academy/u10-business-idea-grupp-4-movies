<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\AddfriendController;
use App\Http\Controllers\SwipeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    // user
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);

    // swipe
    Route::post('/swipe', [MovieController::class, 'index']);
    // add
    Route::post('/swipe/add', [SwipeController::class, 'store']);
    Route::get('/swipe', [SwipeController::class, 'index']);

    // friends
    Route::get('/users', [AddfriendController::class, 'index']);
    Route::post('/addfriend/{id}', [AddfriendController::class, 'store']);
    Route::get('/friendRequests', [AddfriendController::class, 'show']);
    Route::put('/acceptfriendrequest/{id}', [AddfriendController::class, 'update']);
});