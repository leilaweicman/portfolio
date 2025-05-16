<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        return Experience::orderBy('start_date', 'desc')->get();
    }
    
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
        ]);

        $experience = Experience::create($data);
        return response()->json($experience, 201);
    }
    
    public function show(Experience $experience)
    {
        return $experience;
    }
    
    public function update(Request $request, Experience $experience)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'company' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'start_date' => 'sometimes|required|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
        ]);

        $experience->update($data);
        return response()->json($experience);
    }
    
    public function destroy(Experience $experience)
    {
        $experience->delete();
        return response()->json(null, 204);
    }
}
