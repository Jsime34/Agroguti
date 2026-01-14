import React from 'react';
import Slideshow from '../components/Slideshow';
import PackingZoom from '../components/PackingZoom';

export default function Paprika({ t }) {
  const paprikaImages = [
    { src: "/images/paprika_1.jpeg", textKey: "slide1_text" },
    { src: "/images/pimiento_1.jpg", textKey: "slide2_text" },
    { src: "/images/pimiento_2.jpg", textKey: "slide3_text" }
  ];

  return (
    <main className="min-h-screen pt-10 pb-20">
      {/* Encabezado Principal */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#28623f] mb-6 font-montserrat uppercase tracking-tight">
          {t('paprika_title')}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t('paprika_description')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO IZQUIERDO: Información Técnica (Estética Idéntica a Pepper) */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-widest mb-2">
              {t('paprika_specs_tag') || 'Especificaciones de Exportación'}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
              {t('paprika_specs_title')}
            </h2>

            {/* CAJA UNIFICADA: Glassmorphism Style */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">
              
              {/* Grid de Color y Humedad */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('paprika_color_title')}</span>
                  <p className="text-gray-700 font-medium">{t('paprika_color_value')}</p>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">{t('paprika_humidity_title')}</span>
                  <p className="text-gray-700 font-medium">{t('paprika_humidity_value')}</p>
                </div>
              </div>

              {/* Tamaño */}
              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('paprika_size_title')}</span>
                <ul className="space-y-1">
                  <li className="text-gray-700 flex items-center gap-2">
                    <i className="fa-solid fa-ruler-horizontal text-xs text-red-600"></i> {t('paprika_size_value1')}
                  </li>
                  <li className="text-gray-700 flex items-center gap-2">
                    <i className="fa-solid fa-ruler-horizontal text-xs text-red-600"></i> {t('paprika_size_value2')}
                  </li>
                </ul>
              </div>

              {/* Packing con tarjetas internas suaves */}
              <div className="pt-4 border-t border-gray-200/50">
                <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">{t('paprika_packing_title')}</span>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('paprika_packing_value1')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                    <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                    <p className="text-sm text-gray-600">{t('paprika_packing_value2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Slideshow / Galería */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 lg:hidden text-center">{t('paprika_gallery_title')}</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.01] duration-500">
               <Slideshow images={paprikaImages} t={t} showText={false}/>
            </div>
            <p className="text-center text-sm text-gray-500 italic md:block hidden">
               {t('paprika_gallery_caption') || 'Procesamiento de páprika en nuestras plantas'}
            </p>
          </div>

        </section>
      </div>
      <PackingZoom 
        title={t('paprika_packing_zoom_title') || "Empaque Detallado de Exportación"}
        description={t('paprika_packing_zoom_desc') || "Inspeccione la calidad de nuestro envasado y etiquetado de trazabilidad internacional."}
        imageSrc="/images/caja_aji_seco.png" 
      />
    </main>
  );
}