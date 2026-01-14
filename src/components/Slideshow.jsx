import React, { useState, useEffect } from 'react';

// Añadimos showText como prop, por defecto es true
export default function Slideshow({ images, t, showText = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // --- LÓGICA TÁCTIL ---
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div 
      className="relative w-full h-full min-h-[300px] overflow-hidden group bg-gray-900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt="Agroguti"
            className="w-full h-full object-cover"
          />
          
          {/* Solo mostramos el overlay oscuro y el texto si showText es true */}
          {showText && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center pb-16 md:pb-0 px-6 text-center">
                <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-2xl max-w-2xl leading-tight uppercase tracking-tight">
                  {t(slide.textKey)}
                </h2>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Botones de Navegación */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#28623f] text-white p-4 rounded-full backdrop-blur-md transition-all z-20"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#28623f] text-white p-4 rounded-full backdrop-blur-md transition-all z-20"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Puntitos de control */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#28623f] w-8 h-2 rounded-full' 
                : 'bg-white/40 w-2 h-2 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
}