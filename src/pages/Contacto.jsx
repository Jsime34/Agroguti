import React from 'react';

export default function Contacto() {
  return (
    <main>
      <div className="contact-container">
        <div className="map-wrapper">
          {/* CORRECCIÓN: style ahora es un objeto y allowFullScreen lleva S y F mayúsculas */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1604.075238088027!2d-72.21455473180879!3d-16.383644064282304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91419b89fb358f23%3A0xa96fbf0a202fdc07!2sAgronegocios%20e%20inversiones%20Gutierrez!5e1!3m2!1ses!2spe!4v1767987908199!5m2!1ses!2spe" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="contact-text">
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <p data-value="contact_address">Dirección: Calle Las Moras Lote 1 y Lote 2 Villa San Pedro y San Pablo</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p data-value="contact_phone">Contáctanos al: +51956899907</p>
          </div>                
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p data-value="contact_email">Email: jgutierrez@agroguti.com</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-clock"></i>
            <p data-value="contact_hours">Horario de atención: 6:00-18:00</p>
          </div>
        </div>
      </div>
    </main>
  );
}