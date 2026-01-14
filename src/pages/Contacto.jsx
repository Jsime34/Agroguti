import React, { useState } from 'react';
import { supabase } from '../lib/supabase'; // Asegúrate de que la ruta sea correcta

export default function Contacto({ t }) {
  // 1. Estados para el formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // 2. Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Función para enviar a Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (formData.fullName.trim().length < 3) {
      alert("Por favor, ingresa tu nombre completo.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('ContactRequest')
        .insert([
          { 
            fullName: formData.fullName, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      setFormData({ fullName: '', email: '', message: '' }); // Limpiar formulario
    } catch (error) {
      console.error('Error:', error);
      alert("Hubo un error al enviar el mensaje. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/paprika_background_1.jpg')" }}>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA: Formulario e Info */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíenos un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" 
                  placeholder="Juan Pérez" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" 
                  placeholder="correo@ejemplo.com" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 outline-none" 
                  placeholder="¿En qué podemos ayudarle?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-95`}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.6841263054817!2d-72.2136014!3d-16.3217448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9143fe259508899b%3A0xe962534f31c0c1b0!2sCalle%20Las%20Moras%2C%20Majes!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Agronegocios e Inversiones Gutierrez EIRL">
            </iframe>
            
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