<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Experience;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        Experience::insert([
            [
                'role' => 'Software Developer',
                'company' => 'Ignitix IT Consulting GmbH',
                'description' => 'Participé en un equipo de desarrollo distribuido internacionalmente, contribuyendo a la creación de soluciones backend orientadas a sistemas de logística. Utilicé PHP con el framework Yii2 y PostgreSQL como base de datos principal. Además, realicé mejoras en el frontend utilizando JavaScript, optimizando la experiencia de usuario en plataformas internas.',
                'location' => 'Buenos Aires, Argentina / Vienna, Austria',
                'start_date' => '2023-10-01',
                'end_date' => '2024-09-30',
                'is_current' => false,
            ],
            [
                'role' => 'Software Developer',
                'company' => 'COR',
                'description' => 'Diseñé y desarrollé microservicios utilizando Laravel y Node.js, enfocados en la optimización del rendimiento de sistemas críticos. Trabajé con bases de datos relacionales (PostgreSQL) y no relacionales (MongoDB). Tuve un rol activo en la integración de servicios externos como Zapier y Advertmind, y participé en soluciones serverless utilizando AWS EventBridge y Lambda. También colaboré en el desarrollo de interfaces frontend con React JS.',
                'location' => 'Buenos Aires, Argentina',
                'start_date' => '2022-07-01',
                'end_date' => '2023-09-30',
                'is_current' => false,
            ],
            [
                'role' => 'Software Engineer',
                'company' => 'Trocafone',
                'description' => 'Desarrollé funcionalidades backend en Laravel (PHP) y microservicios en Flask (Python), empleando SQLAlchemy para el acceso a datos. Aseguré la calidad del código mediante la implementación de pruebas unitarias. Estuve a cargo de procesos de despliegue continuo utilizando Jenkins, monitoreo de servicios con Kibana y New Relic, y generación de reportes con Redash para análisis de métricas y KPIs del negocio.',
                'location' => 'Buenos Aires, Argentina',
                'start_date' => '2020-09-01',
                'end_date' => '2022-07-01',
                'is_current' => false,
            ],
            [
                'role' => 'Software Developer',
                'company' => 'Soluciones Informáticas Integrales',
                'description' => 'Fui responsable del desarrollo de aplicaciones embebidas para impresoras multifuncionales HP utilizando .NET. Implementé APIs REST en .NET Core para facilitar la comunicación entre dispositivos y servicios web. También desarrollé interfaces web en .NET, JavaScript, HTML, CSS y SQL Server como base de datos.',
                'location' => 'Buenos Aires, Argentina',
                'start_date' => '2019-03-01',
                'end_date' => '2020-09-01',
                'is_current' => false,
            ],
            [
                'role' => 'Software Developer',
                'company' => 'Paisanos Creando',
                'description' => 'Desarrollé funcionalidades backend utilizando PHP, y realicé tareas de frontend básico con HTML, CSS y JavaScript. Además, participé en la integración de sistemas mediante el consumo y creación de Web Services para diversas aplicaciones internas.',
                'location' => 'Buenos Aires, Argentina',
                'start_date' => '2015-04-01',
                'end_date' => '2017-11-01',
                'is_current' => false,
            ],
        ]);
    }
}
