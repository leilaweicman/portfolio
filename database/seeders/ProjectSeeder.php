<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::insert([
            [
                'title' => 'CV Interactivo',
                'description' => 'Sitio web responsivo para presentar mi perfil profesional de forma clara, visual y accesible, diseñado con HTML y CSS.',
                'image_path' => 'interactive-cv.png',
                'github_url' => 'https://github.com/leilaweicman/interactive-cv',
                'prototype_url' => 'https://leilaweicman.github.io/interactive-cv/',
                'is_featured' => false,
            ],
            [
                'title' => 'Portfolio',
                'description' => 'Es mi portfolio personal desarrollado con Laravel y React, aplicando arquitectura MVC tipo API Rest y MySQL como base de datos. El proyecto está diseñado para mostrar mis formaciones, experiencias, proyectos, habilidades y más.',
                'image_path' => 'project-portfolio.png',
                'github_url' => 'https://github.com/leilaweicman/portfolio',
                'prototype_url' => 'https://github.com/leilaweicman/portfolio',
                'is_featured' => true,
            ],
        ]);
    }
}

