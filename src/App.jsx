import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaMapMarkerAlt, FaYoutube, FaCamera, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function App() {
  const galleryImages = [
    { id: 1, src: '/img/streetview_large.jpg', alt: 'Hacienda La Koya - Vista principal desde Street View' },
    { id: 2, src: '/img/streetview6_large.jpg', alt: 'Hacienda La Koya - Sexta vista desde Street View' },
    { id: 3, src: '/img/streetview2_large.jpg', alt: 'Hacienda La Koya - Vista alternativa desde Street View' },
    { id: 4, src: '/img/streetview3_large.jpg', alt: 'Hacienda La Koya - Tercera vista desde Street View' },
    { id: 5, src: '/img/streetview4_large.jpg', alt: 'Hacienda La Koya - Cuarta vista desde Street View' },
    { id: 6, src: '/img/streetview5_large.jpg', alt: 'Hacienda La Koya - Quinta vista desde Street View' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Sección Inicio / Hero */}
        <section 
          id="inicio" 
          className="relative text-white py-32 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/streetview_large.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hacienda La Koya</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Un refugio de paz y naturaleza en el corazón de Bolivia. Descubre la magia de nuestra hacienda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#ubicacion" className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition">
                <FaMapMarkerAlt className="inline mr-2" />
                Ver Ubicación
              </a>
              <a href="#videos" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
                <FaYoutube className="inline mr-2" />
                Ver Videos
              </a>
            </div>
          </div>
        </section>

        {/* Sección Ubicación */}
        <section id="ubicacion" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Ubicación</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700">
                  Hacienda La Koya se encuentra en un entorno natural privilegiado, 
                  rodeado de paisajes impresionantes y tranquilo ambiente rural.
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Dirección</h3>
                  <p className="text-gray-600 mb-4">
                    <FaMapMarkerAlt className="inline text-green-600 mr-2" />
                    Hacienda La Koya, Bolivia
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Hacienda+la+koya/@-21.3394456,-65.933347,1030m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9400cd96fad445b1:0x8d50a9b480555944!8m2!3d-21.3394507!4d-65.9284761!16s%2Fg%2F11q41pvzz0?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
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

        {/* Sección Videos */}
        <section id="videos" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Videos Relacionados</h2>
            <p className="text-lg text-center mb-8 text-gray-600 max-w-2xl mx-auto">
              Descubre la belleza de Hacienda La Koya a través de estos videos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
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
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
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
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                <FaYoutube className="mr-2 text-xl" />
                Más videos en YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Sección Galería */}
        <section id="galeria" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Galería de Imágenes</h2>
            <p className="text-lg text-center mb-8 text-gray-600 max-w-2xl mx-auto">
              Imágenes de los hermosos paisajes y instalaciones de nuestra hacienda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                <FaCamera className="mr-2" />
                Ver Galería Completa
              </button>
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Contacto</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">¿Tienes preguntas?</h3>
                <p className="text-gray-600 mb-8">
                  Contáctanos para más información sobre visitas, alojamiento o eventos en Hacienda La Koya.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">Dirección</h4>
                      <p className="text-gray-600">Hacienda La Koya, Bolivia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaWhatsapp className="text-2xl text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">WhatsApp</h4>
                      <p className="text-gray-600">+591 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-2xl text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">contacto@lakoya.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
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