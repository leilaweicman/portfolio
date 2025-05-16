<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
    public function index()
    {
        return Technology::all();
    }
    
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string',
        ]);

        $technology = Technology::create($data);
        return response()->json($technology, 201);
    }
    
    public function show(Technology $technology)
    {
        return $technology;
    }
    
    public function update(Request $request, Technology $technology)
    {
        $data = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'icon' => 'nullable|string',
        ]);

        $technology->update($data);
        return response()->json($technology);
    }

    public function destroy(Technology $technology)
    {
        $technology->delete();
        return response()->json(null, 204);
    }
}
