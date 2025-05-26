<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph,
            'image_path' => null,
            'github_url' => $this->faker->url,
            'prototype_url' => $this->faker->url,
            'is_featured' => false,
        ];
    }
}

