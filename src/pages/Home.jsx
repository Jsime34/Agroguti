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
        <span className="absolute top-4 left-4 z-10 rounded-full bg-[#28623f] px-3 py-1 text-xs font-bold text-white shadow-lg">
          {badge}
        </span>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6 text-center">
        <div className="text-xl font-bold text-gray-800 group-hover:text-[#28623f] transition-colors uppercase tracking-tight">
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
  const mainSlides = [
    { src: "/images/worker_background.jpeg", textKey: "slide1_text" },
    { src: "/images/pimiento_6.jpg", textKey: "slide2_text" },
    { src: "/images/proceso_1.jpg", textKey: "slide3_text" }
  ];

  return (
    <main className="min-h-screen">
      {/* 1. HERO SLIDESHOW */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Slideshow images={mainSlides} t={t} />
      </section>

      {/* 2. SECCIÓN INTERMEDIA: BIENVENIDA (CORREGIDA) */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#28623f] to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8 font-montserrat tracking-tight leading-tight">
            <span className="text-[#28623f]">{t('main_title_highlight')}</span>
          </h1>
          
          <div className="relative">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-bold">
              {t('main_description')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. NUESTROS PRODUCTOS */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat uppercase tracking-tighter">
                {t('preview_titulo')}
              </h2>
              <p className="text-gray-600 text-lg leading-snug">
                {t('preview_descripcion')}
              </p>
            </div>
            <div className="h-1 w-24 bg-[#28623f] hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProductCard 
              to="/paprika" 
              img="/images/paprika_1.jpeg" 
              title={t('product_1')} 
              badge="Exportación"
            />
            <ProductCard 
              to="/garlic" 
              img="/images/paprika_2.avif" 
              title={t('product_2')} 
              badge="Calidad Extra"
            />
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