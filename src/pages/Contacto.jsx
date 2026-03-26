import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contacto({ t }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.fullName.trim().length < 3) {
      setStatus('name_error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('email_error');
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

      setStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('contact_form_title') || 'Envíenos un mensaje'}</h2>

            {/* Status messages */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-600 text-lg"></i>
                <p className="text-green-700 text-sm font-medium">{t('contact_success') || '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-circle-exclamation text-red-600 text-lg"></i>
                <p className="text-red-700 text-sm font-medium">{t('contact_error') || 'Hubo un error al enviar el mensaje. Intente de nuevo.'}</p>
              </div>
            )}
            {status === 'name_error' && (
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-triangle-exclamation text-amber-600 text-lg"></i>
                <p className="text-amber-700 text-sm font-medium">{t('contact_name_error') || 'Por favor, ingresa tu nombre completo.'}</p>
              </div>
            )}
            {status === 'email_error' && (
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-triangle-exclamation text-amber-600 text-lg"></i>
                <p className="text-amber-700 text-sm font-medium">{t('contact_email_error') || 'Por favor, ingresa un correo electrónico válido.'}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact_label_name') || 'Nombre Completo'}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28623f] outline-none transition-all"
                  placeholder={t('contact_placeholder_name') || 'Juan Pérez'}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact_label_email') || 'Correo Electrónico'}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28623f] outline-none"
                  placeholder={t('contact_placeholder_email') || 'correo@ejemplo.com'}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact_label_message') || 'Mensaje'}</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#28623f] outline-none"
                  placeholder={t('contact_placeholder_message') || '¿En qué podemos ayudarle?'}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#28623f] hover:bg-[#1e4a30]'} text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-95`}
              >
                {loading ? (t('contact_sending') || 'Enviando...') : (t('contact_submit') || 'Enviar Mensaje')}
              </button>
            </form>

            {/* Datos de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4 group">
                <div className="bg-red-50 p-3 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{t('contact_call_us') || 'Llámanos'}</p>
                  <p className="text-gray-700 font-medium text-sm">+51 956 899 907</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-50 p-3 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/51956899907" className="text-gray-700 font-medium text-sm hover:text-green-600 transition-colors">{t('contact_start_chat') || 'Iniciar Chat'}</a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Mapa */}
          <div className="relative bg-gray-200 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.5003428225423!2d-72.21686534065007!3d-16.383098410512652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91419b89fb358f23%3A0xa96fbf0a202fdc07!2sAgronegocios%20e%20inversiones%20Gutierrez!5e0!3m2!1ses!2spe!4v1768417277078!5m2!1ses!2spe"
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
                  <h4 className="font-bold text-gray-800 tracking-tight">{t('contact_location_title') || 'Nuestra Ubicación'}</h4>
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
