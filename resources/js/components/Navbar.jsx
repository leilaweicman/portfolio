import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
  const { url, props } = usePage();
  const user = props.auth?.user;

  const links = [
    { name: 'Sobre mí', href: '/about' },
    { name: 'Experiencia', href: '/experiences' },
    { name: 'Educación', href: '/education' },
    { name: 'Tecnologías', href: '/technologies' },
    { name: 'Proyectos', href: '/projects' },
  ];

  if (user && user.is_admin) {
    links.push({ name: 'Admin Proyectos', href: '/admin/projects' });
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portfolio</h1>
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition ${
                  url === link.href ? 'font-bold underline' : ''
                }`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
