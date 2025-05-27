<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

if (env('APP_ENV') === 'production') {
    URL::forceScheme('https');
}

Route::get('/', fn () => Inertia::render('About'));

Route::get('/technologies', fn () => Inertia::render('Technologies'));

Route::get('/experiences', fn () => Inertia::render('Experiences'));

Route::get('/education', fn () => Inertia::render('Education'));

Route::get('/projects', fn () => Inertia::render('Projects'));

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/projects', [ProjectController::class, 'index']);
    Route::post('/admin/projects', [ProjectController::class, 'store']);
    Route::put('/admin/projects/{id}', [ProjectController::class, 'update']);
    Route::delete('/admin/projects/{id}', [ProjectController::class, 'destroy']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
