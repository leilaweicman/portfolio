# Portfolio - Leila Weicman

Este es mi portfolio personal desarrollado con **Laravel** y **React**, aplicando arquitectura **MVC tipo API Rest**, y una base de datos **MySQL**.
El proyecto está diseñado para mostrar mis formaciones, experiencias, proyectos, habilidades y más.

Incluye las páginas:

- 🧑‍💻 Sobre mí
- 🎓 Educación y Formación
- 💼 Experiencia
- 🧠 Tecnologías
- 📁 Proyectos
- 🔐 Panel de administración (solo admins): CRUD de proyectos

---

## 🚀 Tecnologías utilizadas

- **Back-end**: Laravel 12
- **Front-end**: React + Tailwind CSS + Vite
- **Base de datos**: MySQL
- **ORM**: Eloquent
- **Routing**: Inertia.js
- **Autenticación**: Breeze (con Inertia)

---

## ⚙️ Instalación

Cloná el repositorio y ejecutá los siguientes pasos:

### 1. Clonar el repositorio

```bash
git clone https://github.com/leilaweicman/portfolio.git
cd portfolio
```

### 2. Instalar dependencias
```bash
composer install
npm install
```

### 3. Configurar entorno
``` bash
cp .env.example .env
php artisan key:generate
```

### 4. Ejecutar migraciones
``` bash
php artisan migrate
php artisan migrate --seed
```

### 5. Correr el servidor
``` bash
php artisan serve
npm run dev
```

### 6. Ejecutar tests
```bash
php artisan test
```

---

## 🗂 Estructura del proyecto
<pre>
├── app
│   ├── Models
│   │   ├── Project.php
│   │   ├── Education.php
│   │   ├── Experience.php
│   │   ├── Language.php
│   │   └── Technology.php
│   └── Http
│       └── Controllers
│           └── Admin
│               ├── ProjectController.php
│           └── Api
│               ├── ProjectController.php
│               ├── EducationController.php
│               ├── ExperienceController.php
│               ├── LanguageController.php
│               └── TechnologyController.php
├── resources
│   └── js
│       ├── pages
│       │   ├── About.jsx
│       │   ├── Education.jsx
│       │   ├── Experience.jsx
│       │   └── Projects.jsx
│       ├── components
│       ├── layouts
│       └── hooks
├── routes
│   ├── web.php
│   └── api.php
</pre>
