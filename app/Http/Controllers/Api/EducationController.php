<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index()
    {
        return Education::orderBy('start_date', 'desc')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'type' => 'required|string|max:50',
            'institution' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
        ]);

        $education = Education::create($data);
        return response()->json($education, 201);
    }

    public function show(Education $education)
    {
        return $education;
    }

    public function update(Request $request, Education $education)
    {
        $data = $request->validate([
            'type' => 'sometimes|required|string|max:50',
            'institution' => 'nullable|string|max:255',
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_current' => 'boolean',
        ]);

        $education->update($data);
        return response()->json($education);
    }

    public function destroy(Education $education)
    {
        $education->delete();
        return response()->json(null, 204);
    }
}
