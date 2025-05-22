import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch('/api/technologies')
      .then(res => res.json())
      .then(data => setTechnologies(data))
      .catch(err => console.error('Error al cargar tecnologías:', err));
  }, []);
  
  const categories = ['frontend', 'backend', 'database', 'devops', 'testing', 'tools'];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Tecnologías y Herramientas</h1>

        {categories.map(category => {
          const group = technologies.filter(tech => tech.category === category);
          if (group.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <h2 className="text-lg font-semibold capitalize mb-2 text-gray-800">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {group.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-white border rounded-lg shadow px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 transition"
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}
