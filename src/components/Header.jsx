import React, { useState } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#videos', label: 'Videos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-zinc-900 font-semibold tracking-wide text-lg">Hacienda La Koya</span>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-zinc-500 hover:text-zinc-900"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-5 h-px bg-current mb-1"></span>
          <span className="block w-5 h-px bg-current mb-1"></span>
          <span className="block w-5 h-px bg-current"></span>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-zinc-100 bg-white">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
