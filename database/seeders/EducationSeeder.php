<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Education;

class EducationSeeder extends Seeder
{
    public function run(): void
    {
        Education::insert([
            [
                'institution' => 'UTN',
                'title' => 'Ingeniería en Sistemas de Información',
                'description' => '',
                'location' => 'Buenos Aires, Argentina',
                'start_date' => '2014-03-01',
                'end_date' => '2020-03-01',
                'is_current' => false,
            ],
            [
                'institution' => 'Factoria F5',
                'title' => 'Bootcamp Programación Frontend',
                'description' => null,
                'location' => 'Barcelona, España',
                'start_date' => '2025-04-22',
                'end_date' => '2025-05-29',
                'is_current' => false,
            ],
        ]);
    }
}

