import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  FaMapMarkerAlt, FaYoutube, FaEnvelope, FaWhatsapp, FaTiktok,
  FaHistory, FaUtensils, FaQuoteLeft, FaChevronDown, FaClock, FaPhoneAlt,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '59163460134';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = 'benturaduque2017@gmail.com';

const faqData = [
  {
    q: '¿Cuál es el horario de atención?',
    a: 'La hacienda funciona las 24 horas, los 7 días de la semana.',
  },
  {
    q: '¿Cómo puedo llegar?',
    a: 'Ubicada en Hacienda La Koya, Bolivia. Puedes consultarnos por WhatsApp para indicaciones detalladas.',
  },
  {
    q: '¿Se pueden hacer reservas?',
    a: 'Sí, contáctanos por WhatsApp o email para consultas y reservas.',
  },
  {
    q: '¿Qué productos artesanales ofrecen?',
    a: 'Principalmente quesos de chivo artesanales, además de la experiencia gastronómica completa.',
  },
];

const testimonials = [
  {
    text: 'Un lugar mágico, la tranquilidad y los paisajes son incomparables. El queso de chivo es espectacular.',
    author: 'María L.',
  },
  {
    text: 'Vinimos en familia y fue una experiencia increíble. La atención es muy cálida, se siente como en casa.',
    author: 'Carlos R.',
  },
  {
    text: 'Llegué por los videos de YouTube y superó mis expectativas. Pronto volvemos.',
    author: 'Ana P.',
  },
];

const galleryImages = [
  { id: 1, src: 'img/streetview_large.jpg', alt: 'Hacienda La Koya - Vista principal', category: 'Paisaje' },
  { id: 2, src: 'img/streetview6_large.jpg', alt: 'Hacienda La Koya - Sexta vista', category: 'Paisaje' },
  { id: 3, src: 'img/streetview2_large.jpg', alt: 'Hacienda La Koya - Vista alternativa', category: 'Paisaje' },
  { id: 4, src: 'img/streetview3_large.jpg', alt: 'Hacienda La Koya - Tercera vista', category: 'Naturaleza' },
  { id: 5, src: 'img/streetview4_large.jpg', alt: 'Hacienda La Koya - Cuarta vista', category: 'Naturaleza' },
  { id: 6, src: 'img/streetview5_large.jpg', alt: 'Hacienda La Koya - Quinta vista', category: 'Naturaleza' },
  { id: 7, src: 'img/video1.jpg', alt: 'Hacienda La Koya - Galería video 1', category: 'Actividades' },
  { id: 8, src: 'img/video2.jpg', alt: 'Hacienda La Koya - Galería video 2', category: 'Actividades' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <FaChevronDown className={`text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

function App() {
  const [galleryFilter, setGalleryFilter] = useState('Todos');
  const categories = ['Todos', ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages = galleryFilter === 'Todos' ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter);

  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '', honeypot: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (formData.honeypot) return errors;
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      errors.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ingresa un email válido.';
    }
    if (!formData.mensaje.trim()) errors.mensaje = 'El mensaje es obligatorio.';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setFormStatus('success');
    setFormData({ nombre: '', email: '', mensaje: '', honeypot: '' });
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-zinc-900 focus:text-white focus:px-4 focus:py-2 focus:z-50 focus:text-sm">
        Saltar al contenido
      </a>
      <Header />

      <main id="contenido" className="flex-grow">
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

        {/* Historia */}
        <section id="historia" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Nuestra Historia</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Más de 40 años de tradición</p>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <FaHistory className="text-4xl text-zinc-300 mb-6" />
                <p className="text-zinc-600 leading-relaxed mb-4">
                  El inicio de Hacienda La Koya data de mediados de junio/julio del <strong className="text-zinc-800">1984</strong>. Con el transcurrir del tiempo fue convirtiéndose en lo que es hoy.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Los primeros en construir fueron <strong className="text-zinc-800">Alejandro</strong> y su hijo <strong className="text-zinc-800">Crecencio</strong>. Posteriormente se fue integrando toda la familia.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Hoy en día es un gran atractivo turístico, dedicándose a la crianza de caprinos, vacunos, gallinas, y principalmente a la <strong className="text-zinc-800">elaboración de quesos de chivo</strong>.
                </p>
              </div>
              <div className="aspect-square bg-zinc-100 overflow-hidden">
                <img
                  src="img/streetview2_large.jpg"
                  alt="Hacienda La Koya - Vista histórica"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gastronomía */}
        <section id="gastronomia" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Gastronomía</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Sabores auténticos de la hacienda</p>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <FaUtensils className="text-3xl text-zinc-300 mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-zinc-800 mb-2">Queso de Chivo</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Nuestro principal orgullo. Queso artesanal elaborado con técnicas tradicionales transmitidas por generaciones.
                </p>
              </div>
              <div className="p-6">
                <FaUtensils className="text-3xl text-zinc-300 mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-zinc-800 mb-2">Asado de Chivo</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Preparado con recetas típicas de la región, cocido a la perfección para una experiencia gastronómica inolvidable.
                </p>
              </div>
              <div className="p-6">
                <FaUtensils className="text-3xl text-zinc-300 mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-zinc-800 mb-2">Chivo a la Cruz</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Nuestro plato insignia. Carne de chivo asada lentamente, un sabor que solo se encuentra en La Koya.
                </p>
              </div>
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
                aria-label="Más videos en YouTube"
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
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-8">Imágenes de la hacienda</p>
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-1.5 text-xs border transition-colors ${
                    galleryFilter === cat
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'border-zinc-200 text-zinc-500 hover:border-zinc-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredImages.map((image) => (
                <div key={image.id} className="aspect-square bg-zinc-100 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Testimonios</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Lo que dicen nuestros visitantes</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-6">
                  <FaQuoteLeft className="text-zinc-200 text-2xl mb-4" />
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">{t.text}</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-light text-zinc-900 text-center mb-2">Preguntas Frecuentes</h2>
            <p className="text-xs uppercase tracking-widest text-zinc-400 text-center mb-12">Resolvemos tus dudas</p>
            <div className="max-w-2xl mx-auto space-y-3">
              {faqData.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
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
                  Contáctanos para más información sobre visitas, alojamiento o cualquier consulta sobre Hacienda La Koya.
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
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-700 text-sm hover:text-zinc-900 transition-colors">
                        +591 63460134
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-0.5">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-zinc-700 text-sm hover:text-zinc-900 transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaClock className="text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-0.5">Horario</p>
                      <p className="text-zinc-700 text-sm">Abierto 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={handleFormSubmit} noValidate>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex="-1"
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="nombre" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className={`w-full px-4 py-2.5 border bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors ${formErrors.nombre ? 'border-red-400' : 'border-zinc-200'}`}
                      placeholder="Tu nombre"
                    />
                    {formErrors.nombre && <p className="text-red-500 text-xs mt-1">{formErrors.nombre}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 border bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors ${formErrors.email ? 'border-red-400' : 'border-zinc-200'}`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-xs uppercase tracking-widest text-zinc-400 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className={`w-full px-4 py-2.5 border bg-white text-zinc-800 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none ${formErrors.mensaje ? 'border-red-400' : 'border-zinc-200'}`}
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                    {formErrors.mensaje && <p className="text-red-500 text-xs mt-1">{formErrors.mensaje}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-3 text-sm tracking-wide hover:bg-zinc-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                  {formStatus === 'success' && (
                    <p className="text-green-600 text-sm text-center">¡Mensaje enviado correctamente!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp flotante */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}

export default App;
