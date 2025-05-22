<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Technology;

class TechnologySeeder extends Seeder
{
    public function run(): void
    {
        Technology::insert([
            
                // Frontend
                ['name' => 'React JS', 'category' => 'frontend', 'icon' => null],
                ['name' => 'HTML', 'category' => 'frontend', 'icon' => null],
                ['name' => 'CSS', 'category' => 'frontend', 'icon' => null],
                ['name' => 'JavaScript', 'category' => 'frontend', 'icon' => null],
    
                // Backend
                ['name' => 'PHP (Laravel)', 'category' => 'backend', 'icon' => null],
                ['name' => 'PHP (Yii2)', 'category' => 'backend', 'icon' => null],
                ['name' => 'Node.js', 'category' => 'backend', 'icon' => null],
                ['name' => 'Python (Flask)', 'category' => 'backend', 'icon' => null],
                ['name' => '.NET Core', 'category' => 'backend', 'icon' => null],
                ['name' => '.NET', 'category' => 'backend', 'icon' => null],
                ['name' => 'Java', 'category' => 'backend', 'icon' => null],
    
                // Base de datos
                ['name' => 'PostgreSQL', 'category' => 'database', 'icon' => null],
                ['name' => 'MongoDB', 'category' => 'database', 'icon' => null],
                ['name' => 'SQL Server', 'category' => 'database', 'icon' => null],
                ['name' => 'MySQL', 'category' => 'database', 'icon' => null],
    
                // DevOps / Infraestructura
                ['name' => 'AWS EventBridge', 'category' => 'devops', 'icon' => null],
                ['name' => 'AWS Lambda', 'category' => 'devops', 'icon' => null],
                ['name' => 'Jenkins', 'category' => 'devops', 'icon' => null],
                ['name' => 'Kibana', 'category' => 'devops', 'icon' => null],
                ['name' => 'New Relic', 'category' => 'devops', 'icon' => null],
    
                // Testing
                ['name' => 'Unit Testing', 'category' => 'testing', 'icon' => null],
                
                // Herramientas / Otros
                ['name' => 'Slack', 'category' => 'tools', 'icon' => null],
                ['name' => 'GitHub', 'category' => 'tools', 'icon' => null],

                // Metodologías
                ['name' => 'Agile', 'category' => 'methodology', 'icon' => null],
                ['name' => 'Kanban', 'category' => 'methodology', 'icon' => null],
                ['name' => 'Scrum', 'category' => 'methodology', 'icon' => null],
            ]
        );
    }
}
