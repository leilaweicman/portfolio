<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Project;

class ProjectTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function admin_can_view_project_list()
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $response = $this->actingAs($admin)->get('/admin/projects');

        $response->assertStatus(200);
    }

    /** @test */
    public function guest_cannot_access_admin_projects()
    {
        $response = $this->get('/admin/projects');

        $response->assertRedirect('/login');
    }

    /** @test */
    public function admin_can_create_a_project()
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $data = [
            'title' => 'Test Project',
            'description' => 'Description',
            'image_path' => null,
            'github_url' => 'https://github.com/',
            'prototype_url' => null,
            'is_featured' => false,
        ];

        $response = $this->actingAs($admin)->post('/admin/projects', $data);

        $response->assertRedirect();
        $this->assertDatabaseHas('projects', ['title' => 'Test Project']);
    }

    /** @test */
    public function admin_can_update_a_project()
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $project = Project::factory()->create([
            'title' => 'old title'
        ]);

        $response = $this->actingAs($admin)->put("/admin/projects/{$project->id}", [
            'title' => 'New title',
            'description' => $project->description,
            'image_path' => $project->image_path,
            'github_url' => $project->github_url,
            'prototype_url' => $project->prototype_url,
            'is_featured' => $project->is_featured,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('projects', ['title' => 'New title']);
    }

    /** @test */
    public function admin_can_delete_a_project()
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $project = Project::factory()->create();

        $response = $this->actingAs($admin)->delete("/admin/projects/{$project->id}");

        $response->assertRedirect();
        $this->assertDatabaseMissing('projects', ['id' => $project->id]);
    }

}
