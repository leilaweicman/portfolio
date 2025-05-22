import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
        <div className="grid gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 transition hover:shadow-lg">
              {project.image_path && (
                <img src={`/images/${project.image_path}`} alt={project.title} className="rounded-md object-cover w-full md:w-1/3 max-h-60"/>
              )}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {project.github_url && (
                    <a href={project.github_url} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.prototype_url && (
                    <a href={project.prototype_url} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      Prototipo
                    </a>
                  )}
                  {project.is_featured === 1 && (
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                      Proyecto destacado
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}