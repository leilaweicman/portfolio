<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguageSeeder extends Seeder
{
    public function run(): void
    {
        Language::insert([
            [
                'language' => 'Español',
                'level' => 'Nativo',
                'certification' => null,
            ],
            [
                'language' => 'Inglés',
                'level' => 'B2',
                'certification' => null,
            ],
            [
                'language' => 'Catalán',
                'level' => 'A1',
                'certification' => null,
            ],
        ]);
    }
}
