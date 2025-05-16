<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TechnologyController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\LanguageController;

Route::apiResource('projects', ProjectController::class);
Route::apiResource('technologies', TechnologyController::class);
Route::apiResource('experiences', ExperienceController::class);
Route::apiResource('educations', EducationController::class);
Route::apiResource('languages', LanguageController::class);

