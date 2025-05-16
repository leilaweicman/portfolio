<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
        'type', 'institution', 'title', 'description',
        'location', 'start_date', 'end_date', 'is_current'
    ];
    
    protected $table = 'educations';
}
