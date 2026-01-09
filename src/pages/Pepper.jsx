import React from 'react';

export default function Pepper() {
  return (
    <main>
      <div className="main-text">
        <h2 data-value="pepper_title">Chile Ancho</h2>   
        
        <p data-value="pepper_description">
          El chile poblano (fresco) o chile ancho (seco) es una variedad del chile Capsicum annuum. 
          Es muy apreciado en la gastronomía mexicana, donde se usa en todo tipo de recetas, como en los populares 
          chiles rellenos. En comparación con otros tipos de chiles, el poblano es un fruto grande y con bajo contenido de 
          capsaicina (entre 1.000–2.000 en la escala Scoville), por lo que no es muy picante.
        </p>

        <h2 data-value="pepper_specs_title">Ficha técnica</h2>
        
        <div className="specs-container" style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3 data-value="pepper_color_title">Color</h3>
          <h4 data-value="pepper_color_value">Rojizo oscuro</h4>

          <h3 data-value="pepper_size_title">Tamaño</h3>
          {/* Usamos llaves para los símbolos > y < para evitar errores de interpretación */}
          <h4 data-value="pepper_size_value1"> {'>'}12cm - 90% max.</h4>
          <h4 data-value="pepper_size_value2"> {'<'}12cm - 10% min.</h4>

          <h3 data-value="pepper_packing_title">Packing</h3>
          <h4 data-value="pepper_packing_value1">Cajas de cartón de 11.36 kg o 25 lb</h4>
          <h4 data-value="pepper_packing_value2">Pacas prensadas de 75 kg o 165 lb</h4>

          <h3 data-value="pepper_humidity_title">Humedad</h3>
          <h4 data-value="pepper_humidity_value"> {'>'}13% HR</h4>
        </div>

        <h2 data-value="pepper_gallery_title" style={{ marginTop: '40px' }}>Galería</h2>
        
        <div className="image-container">
           <img 
             src="/images/pimiento_1.jpg" 
             alt="Chile Ancho" 
             className="animated-img" 
             style={{ width: '100%', borderRadius: '15px' }}
           />
        </div>
      </div>
    </main>
  );
}