import React from 'react';
import { FaMapMarkerAlt, FaYoutube, FaImages, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hacienda La Koya</h3>
            <p className="text-green-200">Un lugar mágico en el corazón de Bolivia.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-green-200 transition">Inicio</a></li>
              <li><a href="#ubicacion" className="hover:text-green-200 transition">Ubicación</a></li>
              <li><a href="#videos" className="hover:text-green-200 transition">Videos</a></li>
              <li><a href="#galeria" className="hover:text-green-200 transition">Galería</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-200 transition">
                <FaYoutube />
              </a>
              <a href="#contacto" className="text-2xl hover:text-green-200 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300">
          <p>© {new Date().getFullYear()} Hacienda La Koya. Hecho con <FaHeart className="inline text-red-500" /> en Bolivia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;