<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('12345')
        ]);

        $this->call([
            EducationSeeder::class,
            ExperienceSeeder::class,
            LanguageSeeder::class,
            TechnologySeeder::class,
            ProjectSeeder::class,
        ]);
    }
}
