<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Projects', [
            'projects' => Project::orderByDesc('created_at')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'image_path' => 'nullable|string|max:255',
            'github_url' => 'nullable|url|max:255',
            'prototype_url' => 'nullable|url|max:255',
            'is_featured' => 'boolean',
        ]);

        Project::create($data);

        return redirect()->back()->with('message', 'Proyecto creado exitosamente');
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'image_path' => 'nullable|string|max:255',
            'github_url' => 'nullable|url|max:255',
            'prototype_url' => 'nullable|url|max:255',
            'is_featured' => 'boolean',
        ]);

        $project->update($data);

        return redirect()->back()->with('message', 'Proyecto actualizado exitosamente');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect()->back()->with('message', 'Proyecto eliminado exitosamente');
    }

}
