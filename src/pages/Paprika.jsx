import React from 'react';

export default function Paprika() {
  return (
    <main>
      {/* 1. Cambiamos class por className */}
      <div className="main-text">
        <h2 data-value="paprika_title">Ají Páprika</h2>   
        
        <p data-value="paprika_description">
          Páprika (capsicum annum L.) es una variedad de pimiento dulce con la particularidad de ser alargado, distinto al 
          "pimiento rojo" o "pimentón". Sus características de color, intensidad de picante y sabor, cambia de acuerdo a 
          las mejoras genéticas de la planta y las técnicas de cultivo.
        </p>

        {/* Estructura de Ficha Técnica mejorada para legibilidad */}
        <h2 data-value="paprika_specs_title">Ficha técnica</h2>
        
        <div className="specs-grid" style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3 data-value="paprika_color_title">Color</h3>
          <h4 data-value="paprika_color_value">Rojizo</h4>

          <h3 data-value="paprika_size_title">Tamaño</h3>
          <h4 data-value="paprika_size_value1"> {'>'} 12cm - 90% max.</h4>
          <h4 data-value="paprika_size_value2"> {'<'} 12cm - 10% min.</h4>

          <h3 data-value="paprika_packing_title">Packing</h3>
          <h4 data-value="paprika_packing_value1">Cajas de cartón de 11.36 kg o 25 lb</h4>
          <h4 data-value="paprika_packing_value2">Pacas prensadas de 75 kg o 165 lb</h4>

          <h3 data-value="paprika_humidity_title">Humedad</h3>
          <h4 data-value="paprika_humidity_value"> {'>'} 13% HR</h4>
        </div>

        <h2 data-value="paprika_gallery_title" style={{ marginTop: '40px' }}>Galería</h2>
        
        {/* Aquí puedes insertar el mismo componente de Slideshow o imágenes fijas */}
        <div className="image-container">
           <img 
             src="/images/paprika_1.jpeg" 
             alt="Proceso de Páprika" 
             className="animated-img" 
             style={{ width: '100%', borderRadius: '15px' }}
           />
        </div>
      </div>
    </main>
  );
}