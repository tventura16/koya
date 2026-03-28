import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaMapMarkerAlt, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function App() {
  const galleryImages = [
    { id: 1, src: 'img/streetview_large.jpg', alt: 'Hacienda La Koya - Vista principal desde Street View' },
    { id: 2, src: 'img/streetview6_large.jpg', alt: 'Hacienda La Koya - Sexta vista desde Street View' },
    { id: 3, src: 'img/streetview2_large.jpg', alt: 'Hacienda La Koya - Vista alternativa desde Street View' },
    { id: 4, src: 'img/streetview3_large.jpg', alt: 'Hacienda La Koya - Tercera vista desde Street View' },
    { id: 5, src: 'img/streetview4_large.jpg', alt: 'Hacienda La Koya - Cuarta vista desde Street View' },
    { id: 6, src: 'img/streetview5_large.jpg', alt: 'Hacienda La Koya - Quinta vista desde Street View' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section
          id="inicio"
          className="relative text-white py-40 bg-cover bg-center"
          style={{ backgroundImage: `url('img/streetview_large.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-300 mb-4">Bolivia</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Hacienda La Koya</h1>
            <p className="text-base md:text-lg text-zinc-300 mb-10 max-w-xl mx-auto font-light">
              Un refugio de paz y naturaleza en el corazón de Bolivia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#ubicacion"
                className="border border-white/70 text-white px-8 py-2.5 text-sm hover:bg-white hover:text-zinc-900 transition-colors"
              >
                Ver Ubicación
              </a>
              <a
                href="#videos"
                className="border border-white/30 text-zinc-300 px-8 py-2.5 text-sm hover:border-white/70 hover:text-white transition-colors"
              >
                Ver Videos
              </a>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section id="ubicacion" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Ubicación</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Dónde encontrarnos</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Hacienda La Koya se encuentra en un entorno natural privilegiado,
                  rodeado de paisajes impresionantes y tranquilo ambiente rural.
                </p>
                <div className="border border-zinc-200 p-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">Dirección</p>
                  <p className="text-zinc-600 mb-6 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400 shrink-0" />
                    Hacienda La Koya, Bolivia
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Hacienda+la+koya/@-21.3394456,-65.933347,1030m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9400cd96fad445b1:0x8d50a9b480555944!8m2!3d-21.3394507!4d-65.9284761!16s%2Fg%2F11q41pvzz0?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-zinc-800 text-zinc-800 px-6 py-2 text-sm hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
              <div className="h-96 overflow-hidden border border-zinc-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.0911394!2d-65.9284761!3d-21.3394507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9400cd96fad445b1%3A0x8d50a9b480555944!2sHacienda%20la%20koya!5e0!3m2!1ses!2sbo!4v1711387200000!5m2!1ses!2sbo"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Hacienda La Koya"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Videos</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Descubre la hacienda</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xhkvpKPznlc"
                  title="Video 1 Hacienda La Koya"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vCG5rDiimPk"
                  title="Video 2 Hacienda La Koya"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-600 px-6 py-2.5 text-sm hover:border-zinc-800 hover:text-zinc-900 transition-colors"
              >
                <FaYoutube />
                Más videos en YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="galeria" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Galería</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Imágenes de la hacienda</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {galleryImages.map((image) => (
                <div key={image.id} className="aspect-square bg-zinc-100 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Contacto</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Estamos para ayudarte</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
              <div>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Contáctanos para más información sobre visitas, alojamiento o eventos en Hacienda La Koya.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-0.5">Dirección</p>
                      <p className="text-zinc-700 text-sm">Hacienda La Koya, Bolivia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaWhatsapp className="text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-0.5">WhatsApp</p>
                      <p className="text-zinc-700 text-sm">+591 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-0.5">Email</p>
                      <p className="text-zinc-700 text-sm">contacto@lakoya.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-2.5 border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2.5 border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      className="w-full px-4 py-2.5 border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-3 text-sm tracking-wide hover:bg-zinc-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
