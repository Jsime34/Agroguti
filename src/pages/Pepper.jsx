import React from 'react';
import Slideshow from '../components/Slideshow';

export default function Pepper({ t }) {
  // Configuración de galería para Chile Ancho
  const pepperImages = [
    { src: "/images/pimiento_1.jpg", textKey: "slide1_text" },
    { src: "/images/pimiento_2.jpg", textKey: "slide2_text" },
    { src: "/images/pimiento_3.jpg", textKey: "slide3_text" }
  ];

  return (
    <main className="min-h-screen pt-10 pb-20">
      {/* Encabezado Principal */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#28623f] mb-6 font-montserrat uppercase tracking-tight">
          {t('pepper_title')}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t('pepper_description')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO IZQUIERDO: Información Técnica */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-widest mb-2">
              {t('pepper_specs_tag') || 'Variedad Capsicum'}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
              {t('pepper_specs_title')}
            </h2>

            {/* CAJA DE INFORMACIÓN UNIFICADA (Glassmorphism) */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('pepper_color_title')}</span>
                  <p className="text-gray-700 font-medium">{t('pepper_color_value')}</p>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('pepper_humidity_title')}</span>
                  <p className="text-gray-700 font-medium">{t('pepper_humidity_value')}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('pepper_size_title')}</span>
                <ul className="space-y-1">
                  <li className="text-gray-700 flex items-center gap-2">
                    <i className="fa-solid fa-ruler-horizontal text-xs text-orange-600"></i> {t('pepper_size_value1')}
                  </li>
                  <li className="text-gray-700 flex items-center gap-2">
                    <i className="fa-solid fa-ruler-horizontal text-xs text-orange-600"></i> {t('pepper_size_value2')}
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('pepper_packing_title')}</span>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('pepper_packing_value1')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('pepper_packing_value2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Carrusel */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
               <Slideshow images={pepperImages} t={t} />
            </div>
            <div className="bg-[#28623f]/10 p-4 rounded-2xl border border-[#28623f]/20">
              <p className="text-sm text-[#28623f] text-center font-medium">
                <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                {t('pepper_scoville_info') || '1.000 – 2.000 Scoville (Bajo Picor)'}
              </p>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}