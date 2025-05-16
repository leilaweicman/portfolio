<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image_path' => 'nullable|string',
            'github_url' => 'nullable|url',
            'prototype_url' => 'nullable|url',
            'is_featured' => 'boolean',
        ]);

        $project = Project::create($data);
        return response()->json($project, 201);
    }

    public function show(Project $project)
    {
        return $project;
    }
    
    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'image_path' => 'nullable|string',
            'github_url' => 'nullable|url',
            'prototype_url' => 'nullable|url',
            'is_featured' => 'boolean',
        ]);

        $project->update($data);
        return response()->json($project);
    }
    
    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(null, 204);
    }
}
