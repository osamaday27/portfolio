<?php
use App\Http\Controllers\Api\Admin;
use App\Http\Controllers\Api\Public as Pub;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // ---- Public (read-only, cached)
    Route::get('site', [Pub\SiteController::class, 'show']);
    Route::get('skills', [Pub\SiteController::class, 'skills']);
    Route::get('experience', [Pub\SiteController::class, 'experience']);
    Route::get('projects', [Pub\ProjectController::class, 'index']);
    Route::get('projects/{slug}', [Pub\ProjectController::class, 'show']);
    Route::post('contact', [Pub\ContactController::class, 'store'])->middleware('throttle:5,1');

    // ---- Auth
    Route::post('auth/login', [Admin\AuthController::class, 'login'])->middleware('throttle:5,1');
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('auth/logout', [Admin\AuthController::class, 'logout']);
        Route::get('auth/me', [Admin\AuthController::class, 'me']);
    });

    // ---- Dashboard (token + admin gate)
    Route::prefix('admin')->middleware(['auth:sanctum', 'can:manage-site'])->group(function () {
        Route::patch('projects/reorder', [Admin\ProjectController::class, 'reorder']);
        Route::apiResource('projects', Admin\ProjectController::class);
        Route::scopeBindings()->group(function () {
            Route::post('projects/{project}/images', [Admin\ProjectImageController::class, 'store']);
            Route::match(['put', 'patch'], 'projects/{project}/images/{image}', [Admin\ProjectImageController::class, 'update']);
            Route::delete('projects/{project}/images/{image}', [Admin\ProjectImageController::class, 'destroy']);
        });
        Route::apiResource('skill-groups', Admin\SkillGroupController::class)->except('show');
        Route::apiResource('experiences', Admin\ExperienceController::class)->except('show');
        Route::get('settings', [Admin\SettingController::class, 'index']);
        Route::put('settings/{section}', [Admin\SettingController::class, 'update']);
        Route::post('profile/photo', [Admin\ProfileController::class, 'photo']);
        Route::post('profile/cv', [Admin\ProfileController::class, 'cv']);
        Route::get('messages', [Admin\MessageController::class, 'index']);
        Route::patch('messages/{message}/read', [Admin\MessageController::class, 'read']);
        Route::delete('messages/{message}', [Admin\MessageController::class, 'destroy']);
    });
});
