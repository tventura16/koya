import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#videos', label: 'Videos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#inicio" className="text-zinc-900 font-semibold tracking-wide text-lg focus:outline-none focus:underline">
          Hacienda La Koya
        </a>
        <nav className="hidden md:flex space-x-8" aria-label="Navegación principal">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none focus:underline"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-zinc-500 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 rounded"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : 'mb-1'}`}></span>
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
        </button>
      </div>
      <nav
        id="menu-movil"
        className={`md:hidden border-t border-zinc-100 bg-white transition-all duration-300 ${open ? 'block' : 'hidden'}`}
        aria-label="Navegación móvil"
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="block px-6 py-3 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors focus:outline-none focus:underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
