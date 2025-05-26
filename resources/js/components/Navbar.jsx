import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
  const { url, props } = usePage();
  const user = props.auth?.user;
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Sobre mí', href: '/' },
    { name: 'Experiencia', href: '/experiences' },
    { name: 'Educación', href: '/education' },
    { name: 'Tecnologías', href: '/technologies' },
    { name: 'Proyectos', href: '/projects' },
  ];

  if (user?.is_admin) {
    links.push({ name: 'Admin Proyectos', href: '/admin/projects' });
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portfolio</h1>
        
        {/* Burger button mobile */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition ${
                  url === link.href ? 'font-bold underline' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3">
            {links.map(link => (
              <li key={link.href}>
                <Link href={link.href}
                  className={`block text-gray-700 hover:text-blue-600 transition ${
                    url === link.href ? 'font-bold underline' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
