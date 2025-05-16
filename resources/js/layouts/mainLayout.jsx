import React from 'react';
import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar/>
      <main className="px-4 py-8">{children}</main>
    </div>
  );
}
