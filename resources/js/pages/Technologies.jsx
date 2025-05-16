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

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Tecnologías y Herramientas</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-white border rounded-lg shadow px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-indigo-50 transition">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
