import React from 'react';
import PackingZoom from '../components/PackingZoom';
import Slideshow from '../components/Slideshow';

export default function Garlic({ t }) {
  // 1. Imágenes sin cambios en la estructura para no romper el componente
  const whiteGarlicImages = [
    { src: "/images/ajo_1.jpg", textKey: "slide1_text" },
    { src: "/images/ajo_2.jpg", textKey: "slide2_text" },
    { src: "/images/ajo_3.jpeg", textKey: "slide3_text" }
  ];

  const purpleGarlicImages = [
    { src: "/images/pimiento_1.jpg", textKey: "slide1_text" },
    { src: "/images/pimiento_2.jpg", textKey: "slide2_text" },
    { src: "/images/pimiento_3.jpg", textKey: "slide3_text" }
  ];

  const napuriImprovedImages = [
    { src: "/images/pimiento_4.jpg", textKey: "slide1_text" },
    { src: "/images/pimiento_5.jpg", textKey: "slide2_text" },
    { src: "/images/pimiento_6.jpg", textKey: "slide3_text" }
  ];

  return (
    <main className="min-h-screen pt-10 pb-20 garlic-page">
      {/* 2. TRUCO CSS: Ocultamos el texto del slideshow solo dentro de .garlic-page */}
      <style>{`
        .garlic-page .slideshow-text-container, 
        .garlic-page .slideshow-overlay-text { 
          display: none !important; 
        }
      `}</style>

      {/* Encabezado Principal */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#28623f] mb-6 font-montserrat uppercase tracking-tight">
          {t('garlic_title')}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t('garlic_description')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* 1. SECCIÓN AJO BLANCO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-green-100 text-[#28623f] rounded-full text-sm font-bold uppercase tracking-widest">
              {t('garlic_white_title')}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
              {t('garlic_white_color_title') || 'Ajo Blanco'}
            </h2>
            
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_color') || 'Color'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_white_color_value') || 'Blanco Marfil'}</p>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_humidity') || 'Humedad'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_white_humidity_value') || '60% - 65% HR'}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_size') || 'Tamaño'}</span>
                <p className="text-gray-700 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-ruler-horizontal text-green-600 text-xs"></i>
                  {t('garlic_white_size1')} - {t('garlic_white_size2')} - {t('garlic_white_size3')}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_packing') || 'Packing'}</span>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                  <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                  <p className="text-sm text-gray-600">{t('garlic_white_packing')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square">
            <Slideshow images={whiteGarlicImages} t={t} showText={false}/>
          </div>
        </section>

        {/* 2. SECCIÓN AJO MORADO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square">
            <Slideshow images={purpleGarlicImages} t={t} showText={false}/>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest">
              {t('garlic_purple_title')}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">{t('garlic_purple_color_title')}</h2>
            
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_color') || 'Color'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_purple_color_value') || 'Morado Intenso'}</p>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_humidity') || 'Humedad'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_purple_humidity_value') || '60% - 70% HR'}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_size') || 'Tamaño'}</span>
                <p className="text-gray-700 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-ruler-horizontal text-purple-600 text-xs"></i>
                  {t('garlic_purple_size1')} - {t('garlic_purple_size2')} - {t('garlic_purple_size3')}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_packing') || 'Packing'}</span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('garlic_purple_packing1')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('garlic_purple_packing2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN AJO NAPURÍ MEJORADO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold uppercase tracking-widest">
              {t('garlic_napuri_tag') || 'Variedad Especial'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">{t('garlic_napuri_improved_title')}</h2>
            
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_color') || 'Color'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_napuri_color_value') || 'Blanco Rosáceo'}</p>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('garlic_specs_humidity') || 'Humedad'}</span>
                  <p className="text-gray-700 font-medium">{t('garlic_napuri_humidity_value') || '65% HR'}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_size') || 'Tamaño'}</span>
                <p className="text-gray-700 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-ruler-horizontal text-amber-600 text-xs"></i>
                  4 - 5 - 6 - 7
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('garlic_specs_packing') || 'Packing'}</span>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                  <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                  <p className="text-sm text-gray-600">{t('garlic_napuri_packing_value') || 'Sacos de malla / Cajas'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square">
            <Slideshow images={napuriImprovedImages} t={t} showText={false}/>
          </div>
        </section>

      </div>

      <PackingZoom 
        title={t('garlic_packing_zoom_title') || "Empaque de Exportación - Ajo"}
        description={t('garlic_packing_zoom_desc') || "Nuestro empaque garantiza la frescura y protección del bulbo durante el tránsito internacional."}
        imageSrc="/images/caja_ajo.png" 
        />
    </main>
  );
}