import React from 'react';

export default function Contacto({ t }) {
  return (
    <main className="min-h-screen py-12 px-4 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/paprika_background_1.jpg')" }}>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA: Formulario e Info */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíenos un mensaje</h2>
            
            <form className="space-y-4 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input type="email" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" placeholder="correo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows="4" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-95">
                Enviar Mensaje
              </button>
            </form>

            {/* Datos de contacto con iconos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4 group">
                <div className="bg-red-50 p-3 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Llámanos</p>
                  <p className="text-gray-700 font-medium text-sm">+51 956 899 907</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-50 p-3 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/51956899907" className="text-gray-700 font-medium text-sm hover:text-green-600 transition-colors">Iniciar Chat</a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Mapa y Dirección */}
          <div className="relative bg-gray-200 min-h-[400px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.4795405557018!2d-72.21448073216114!3d-16.383050128624184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91419b89fb358f23%3A0xa96fbf0a202fdc07!2sAgronegocios%20e%20inversiones%20Gutierrez!5e1!3m2!1ses!2spe!4v1768080519639!5m2!1ses!2spe" 
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Agronegocios e Inversiones Gutierrez EIRL">
          </iframe>
            
            {/* Overlay flotante de dirección (solo se ve en pantallas grandes) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 hidden md:block">
              <div className="flex gap-3">
                <i className="fa-solid fa-location-dot text-red-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-800 tracking-tight">Nuestra Ubicación</h4>
                  <p className="text-sm text-gray-600">Calle Las Moras Lote 1 y 2, Villa San Pedro y San Pablo, Majes</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}