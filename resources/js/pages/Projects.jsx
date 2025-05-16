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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Proyectos</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col">
              {project.image_path && (
                <img src={`/images/${project.image_path}`} alt={project.title} className="rounded-md mb-4 object-cover h-48 w-full"/>
              )}
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.description}</p>

              <div className="mt-auto space-x-4">
                {project.github_url && (
                  <a href={project.github_url} className="text-blue-600 hover:underline" target="_blank">
                    GitHub
                  </a>
                )}
                {project.prototype_url && (
                  <a href={project.prototype_url} className="text-blue-600 hover:underline" target="_blank">
                    Prototipo
                  </a>
                )}
              </div>

              {project.is_featured === 1 && (
                <span className="text-xs bg-yellow-200 text-yellow-800 mt-4 px-2 py-1 rounded w-fit">
                  Proyecto destacado
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
