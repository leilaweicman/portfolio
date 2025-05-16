<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'title', 'company', 'description', 'location',
        'start_date', 'end_date', 'is_current'
    ];

    protected $table = 'experiences';
}
