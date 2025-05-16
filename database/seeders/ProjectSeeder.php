<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'CV Interactivo',
            'description' => 'Sitio web responsivo, diseñado con HTML y CSS.',
            'image_path' => 'interactive-cv.png',
            'github_url' => 'https://leilaweicman.github.io/interactive-cv/',
            'prototype_url' => null,
            'is_featured' => false,
        ]);
    }
}

