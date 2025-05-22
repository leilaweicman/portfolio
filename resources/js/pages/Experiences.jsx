import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { formatDate } from '@/utils/formatDate';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/api/experiences')
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error("Error cargando experiencia:", err));
  }, []);

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Experiencia Profesional</h1>
        <div className="grid gap-6 mb-10">
          {Array.isArray(experiences) && experiences.map(exp => (
            <div key={exp.id} className="p-5 bg-white rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <p className="text-gray-600 italic">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {formatDate(exp.start_date)} - {exp.is_current ? 'Actualidad' : formatDate(exp.end_date)}
              </p>
              {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
              {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/files/CV_Leila_Weicman.pdf" target="_blank" className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" download>
            Descargar CV
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
