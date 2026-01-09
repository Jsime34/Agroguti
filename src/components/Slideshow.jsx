import React, { useState } from 'react';

export default function Slideshow({ images, t }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="slideshow-container-wrapper">
      <div className="slideshow-container">
        {/* Imagen actual */}
        <div className="mySlides fade" style={{ display: 'block' }}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={images[index].src} style={{ width: '100%', borderRadius: '10px' }} alt="Gallery" />
          {/* Texto de la imagen traducido si existe la clave */}
          {images[index].textKey && (
            <div className="text">{t(images[index].textKey)}</div>
          )}
        </div>

        {/* Botones de navegación */}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Puntos (Dots) indicadores */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {images.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === index ? 'active' : ''}`} 
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}