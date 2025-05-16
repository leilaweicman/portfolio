<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function index()
    {
        return Language::all();
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'language' => 'required|string',
            'level' => 'required|string',
            'certification' => 'nullable|string',
        ]);

        return Language::create($request->all());
    }
    
    public function show (Language $language)
    {
        return $language;
    }
    
    public function update(Request $request, Language $language)
    {
        $request->validate([
            'language' => 'sometimes|required|string',
            'level' => 'sometimes|required|string',
            'certification' => 'nullable|string',
        ]);

        $language->update($request->all());

        return $language;
    }
    
    public function destroy(Language $language)
    {
        $language->delete();

        return response()->json(['message' => 'Language deleted']);
    }
}
