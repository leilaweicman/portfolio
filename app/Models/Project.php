<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image_path',
        'github_url',
        'prototype_url',
        'is_featured',
    ];
    
    protected $table = 'projects';
}
