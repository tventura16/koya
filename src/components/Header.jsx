import React from 'react';
import { FaMapMarkerAlt, FaYoutube, FaImages, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hacienda La Koya</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-green-200 transition">Inicio</a>
          <a href="#ubicacion" className="hover:text-green-200 transition">Ubicación</a>
          <a href="#videos" className="hover:text-green-200 transition">Videos</a>
          <a href="#galeria" className="hover:text-green-200 transition">Galería</a>
          <a href="#contacto" className="hover:text-green-200 transition">Contacto</a>
        </nav>
        <button className="md:hidden text-2xl">
          <FaMapMarkerAlt />
        </button>
      </div>
    </header>
  );
};

export default Header;