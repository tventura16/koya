import React from 'react';
import { FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 mt-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-zinc-800">
          <div>
            <p className="text-zinc-100 font-semibold mb-2">Hacienda La Koya</p>
            <p className="text-sm">Un lugar mágico en el corazón de Bolivia.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Secciones</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-zinc-100 transition-colors">Inicio</a></li>
              <li><a href="#ubicacion" className="hover:text-zinc-100 transition-colors">Ubicación</a></li>
              <li><a href="#videos" className="hover:text-zinc-100 transition-colors">Videos</a></li>
              <li><a href="#galeria" className="hover:text-zinc-100 transition-colors">Galería</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Contacto</p>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors">
                <FaYoutube />
              </a>
              <a href="#contacto" className="hover:text-zinc-100 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-600 mt-8">
          © {new Date().getFullYear()} Hacienda La Koya · Bolivia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
