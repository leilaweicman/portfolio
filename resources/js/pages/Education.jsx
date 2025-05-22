import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { formatDate } from '@/utils/formatDate';

export default function Education() {
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('/api/educations')
      .then(res => res.json())
      .then(data => setEducations(data))
      .catch(err => console.error('Error fetching education:', err));
  }, []);

  useEffect(() => {
    fetch('/api/languages')
      .then(res => res.json())
      .then(data => setLanguages(data))
      .catch(err => console.error("Error fetching languages:", err));
  }, []);

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Educación y Formación</h1>
        <div className="grid gap-6 mb-10">
          {Array.isArray(educations) && educations.map(edu => (
            <div key={edu.id} className="p-5 bg-white rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold">{edu.title}</h2>
              <p className="text-gray-600 italic">
                {edu.institution}
                {edu.type && ` — ${edu.type}`}
              </p>
              <p className="text-sm text-gray-500">
                {formatDate(edu.start_date)} - {edu.is_current ? 'Actualidad' : formatDate(edu.end_date)}
              </p>
              
              {edu.location && <p className="text-sm text-gray-500">{edu.location}</p>}
              {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
            </div>
          ))}
        </div>
      
        <h2 className="text-2xl font-bold mb-4 text-center">Idiomas</h2>
        <div className="grid gap-6">
          {Array.isArray(languages) && languages.map(lang => (
            <div key={lang.id} className="p-5 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold">{lang.language}</h3>
              {lang.level && (
                <p className="text-sm text-gray-600">Nivel: {lang.level}</p>
              )}
              {lang.certification && (
                <p className="text-sm text-gray-500">Certificación: {lang.certification}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}