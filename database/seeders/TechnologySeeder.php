<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Technology;

class TechnologySeeder extends Seeder
{
    public function run(): void
    {
        $techs = ['Laravel', 'React', 'MySQL'];

        foreach ($techs as $name) {
            Technology::create([
                'name' => $name,
            ]);
        }
    }
}
