import React, { useState } from 'react';

export default function Nosotros({ t }) {
  const [activeCountry, setActiveCountry] = useState('peru');

  const countries = {
    peru: { title: "Perú", flag: "🇵🇪", desc: "Nuestra base de operaciones y origen de los mejores productos agrícolas del mundo." },
    usa: { title: t('usa_title'), flag: "🇺🇸", desc: t('usa_description') },
    mexico: { title: t('mexico_title'), flag: "🇲🇽", desc: t('mexico_description') },
    spain: { title: t('spain_title'), flag: "🇪🇸", desc: t('spain_description') }
  };

  const pasosProceso = [
    { id: 1, icon: 'fa-seedling', color: 'bg-green-100', text: 'harvest' },
    { id: 2, icon: 'fa-microscope', color: 'bg-blue-100', text: 'quality' },
    { id: 3, icon: 'fa-industry', color: 'bg-amber-100', text: 'process' },
    { id: 4, icon: 'fa-ship', color: 'bg-indigo-100', text: 'export' }
  ];

  return (
    <main className="min-h-screen pt-10 pb-20">
      
      {/* 1. SECCIÓN VALORES (Adaptada para móvil) */}
      <div className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-16 mb-20 md:mb-24">
        {/* Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-[#28623f]/10 text-[#28623f] rounded-full text-xs md:text-sm font-bold uppercase tracking-widest">
              {t('vision_titulo')}
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
              "{t('vision_texto')}"
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-all duration-500">
            <img src="images/proceso_1.jpg" alt="Visión" className="w-full h-60 md:h-80 object-cover" />
          </div>
        </div>

        {/* Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-all duration-500">
            <img src="images/proceso_2.jpg" alt="Misión" className="w-full h-60 md:h-80 object-cover" />
          </div>
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-[#28623f]/10 text-[#28623f] rounded-full text-xs md:text-sm font-bold uppercase tracking-widest">
              {t('mision_titulo')}
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
              "{t('mision_texto')}"
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN: NUESTRO PROCESO (Línea de tiempo responsiva) */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-montserrat uppercase tracking-tight">
            {t('process_main_title') || 'Nuestro Proceso'}
          </h2>
          <div className="h-1 w-16 bg-[#28623f] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Línea conectora (Solo en pantallas grandes) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {pasosProceso.map((paso) => (
              <div key={paso.id} className="group flex flex-col items-center text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${paso.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <i className={`fa-solid ${paso.icon} text-xl md:text-2xl text-[#28623f]`}></i>
                </div>
                <div className="mt-4 md:mt-6 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 w-full">
                  <h4 className="font-bold text-gray-800 uppercase text-[10px] md:text-xs mb-1 md:mb-2">{t(`process_step${paso.id}_title`)}</h4>
                  <p className="text-[11px] text-gray-600 leading-tight">{t(`process_step${paso.id}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAPA INTERACTIVO (Optimizado para Móvil) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-montserrat uppercase tracking-tight">
            {t('export_countries_title')}
          </h2>
          <p className="text-[#28623f] text-sm font-medium mt-2">{t('map_instruction') || 'Toca los puntos para explorar nuestros mercados'}</p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch bg-white/40 backdrop-blur-md p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/50 shadow-2xl">
          
          {/* PANEL DE INFORMACIÓN (Primero en móvil para lectura fácil) */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col">
            <div className="w-full bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-gray-100 min-h-[200px] lg:min-h-[350px] flex flex-col justify-center transition-all duration-500">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-4xl md:text-5xl drop-shadow-sm">{countries[activeCountry].flag}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight leading-none">{countries[activeCountry].title}</h3>
                  <div className="h-1.5 w-10 bg-[#28623f] mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic text-xs md:text-sm">
                {countries[activeCountry].desc}
              </p>
              <div className="pt-4 mt-4 border-t border-gray-50 flex items-center gap-2">
                <i className="fa-solid fa-truck-fast text-[#28623f] text-xs"></i>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('market_active') || 'Mercado Activo'}</span>
              </div>
            </div>
          </div>

          {/* CONTENEDOR DEL MAPA */}
          <div className="order-2 lg:order-1 lg:col-span-8 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-50 border border-gray-100 min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
            <div 
              className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-30 sm:opacity-20 scale-[1.4] sm:scale-100" 
              style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')` }}
            ></div>

            {/* PUNTOS INTERACTIVOS (Con área de toque ampliada para móviles) */}
            
            {/* PERÚ */}
            <div className="absolute top-[55%] left-[26%] z-20 cursor-pointer p-4 -m-4" onClick={() => setActiveCountry('peru')}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#28623f] rounded-full animate-ping opacity-20"></div>
                <div className={`w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeCountry === 'peru' ? 'bg-[#28623f] scale-125' : 'bg-gray-400'}`}></div>
              </div>
            </div>

            {/* USA */}
            <div className="absolute top-[26%] left-[22%] z-20 cursor-pointer p-4 -m-4" onClick={() => setActiveCountry('usa')}>
              <div className={`w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeCountry === 'usa' ? 'bg-blue-600 scale-125' : 'bg-gray-400'}`}></div>
            </div>

            {/* MÉXICO */}
            <div className="absolute top-[34%] left-[18%] z-20 cursor-pointer p-4 -m-4" onClick={() => setActiveCountry('mexico')}>
              <div className={`w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeCountry === 'mexico' ? 'bg-green-600 scale-125' : 'bg-gray-400'}`}></div>
            </div>

            {/* ESPAÑA */}
            <div className="absolute top-[25%] left-[45%] z-20 cursor-pointer p-4 -m-4" onClick={() => setActiveCountry('spain')}>
              <div className={`w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeCountry === 'spain' ? 'bg-red-600 scale-125' : 'bg-gray-400'}`}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}