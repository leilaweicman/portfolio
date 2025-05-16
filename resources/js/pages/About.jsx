import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <MainLayout>
        <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
            <div className="max-w-xl mx-auto text-center">
                <img src="/images/profile.png" alt="Foto de perfil" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"/>
                <h1 className="text-4xl font-bold mb-2">Leila Weicman</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Desarrolladora de software con experiencia en empresas tecnológicas y startups, con un enfoque sólido en diseño de sistemas, desarrollo de APIs y buenas prácticas.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    Con formación en ingeniería en sistemas y experiencia en entornos ágiles, me destaco por la proactividad, el trabajo en equipo y el fuerte interés por la mejora continua y la tecnología.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    Actualmente, busco un nuevo desafío profesional que me permita seguir creciendo y aportar valor en el sector tecnológico en España.
                </p>
            </div>
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/leilaweicman" className="flex items-center space-x-2 text-blue-600 hover:underline" target="_blank">
                    <Github size={18} />
                    <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/leilaweicman" className="flex items-center space-x-2 text-blue-600 hover:underline" target="_blank">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                </a>
                <a href="mailto:leila@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:underline">
                    <Mail size={18} />
                    <span>Email</span>
                </a>
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