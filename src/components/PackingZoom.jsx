import React, { useState } from 'react';

export default function PackingZoom({ title, description, imageSrc }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Calculamos el porcentaje de la posición del mouse dentro de la imagen
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase font-montserrat">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contenedor principal con overflow-hidden para que la imagen no se salga */}
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-50 border border-gray-200 cursor-crosshair"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Etiqueta flotante */}
            {!isHovering && (
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <span className="bg-black/40 text-white px-6 py-2 rounded-full backdrop-blur-sm uppercase text-sm font-bold tracking-widest">
                  Pasa el mouse para ver detalle
                </span>
              </div>
            )}

            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto transition-transform duration-200 ease-out"
              style={{
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                transform: isHovering ? 'scale(2.5)' : 'scale(1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}