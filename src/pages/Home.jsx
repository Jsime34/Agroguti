import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function ProductCard({ to, img, title, badge }) {
  return (
    <Link to={to} className="group relative block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 w-full overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 z-10 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
          {badge}
        </span>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6 text-center">
        <div className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
          {title}
        </div>
        <div className="mt-2 text-sm text-gray-500 font-medium">
          Ver detalles →
        </div>
      </div>
    </Link>
  );
}

export default function Home({ t }) {
  // 1. Definimos las imágenes para el carrusel principal
  const mainSlides = [
    { src: "/images/pimiento_3.jpg", textKey: "slide1_text" },
    { src: "/images/pimiento_6.jpg", textKey: "slide2_text" },
    { src: "/images/proceso_1.jpg", textKey: "slide3_text" }
  ];

  return (
    <main>
      {/* 2. Implementación del Slideshow reutilizable */}
      <section className="home-hero">
        <Slideshow images={mainSlides} t={t} />
      </section>

      <div className="main-text">
        <h1 data-value="main_title">{t('main_title')}</h1>
        <p data-value="main_description">
          {t('main_description')}
        </p>
      </div>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" data-value="preview_titulo">
              {t('preview_titulo')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-value="preview_descripcion">
              {t('preview_descripcion')}
            </p>
          </div>

          {/* La Cuadrícula (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta 1: Páprika */}
            <ProductCard 
              to="/paprika" 
              img="/images/paprika_1.jpeg" 
              title={t('product_1')} 
              badge="Exportación"
            />

            {/* Tarjeta 2: Ajo */}
            <ProductCard 
              to="/garlic" 
              img="/images/paprika_2.avif" 
              title={t('product_2')} 
              badge="Calidad Extra"
            />

            {/* Tarjeta 3: Pimiento Ancho */}
            <ProductCard 
              to="/pepper" 
              img="/images/ajo_2.jpg" 
              title={t('product_3')} 
              badge="Majes, Perú"
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}