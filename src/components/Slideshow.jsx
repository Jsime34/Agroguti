import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, t }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de Autoplay
  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="slideshow-container">
      <div 
        className="slideshow-wrapper" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <img 
              src={image.src} 
              alt={`Slide ${index}`} 
              className="slide-image" 
            />
            {/* Si tienes t y textKey, muestra el texto */}
            {t && image.textKey && (
              <div className="slide-overlay">
                <p>{t(image.textKey)}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="prev-btn" onClick={prevSlide} type="button">&#10094;</button>
      <button className="next-btn" onClick={nextSlide} type="button">&#10095;</button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;