import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

export default function Home({ t }) {
  // 1. Definimos las imágenes para el carrusel principal
  const mainSlides = [
    { src: "/images/pimiento_3.jpg", textKey: "slide1_text" },
    { src: "/images/pimiento_6.jpg", textKey: "slide2_text" },
    { src: "/images/proceso_1.jpg", textKey: "slide3_text" }
  ];

  return (
    <main>
      {/* 2. Implementación del Slideshow reutilizable */}
      <section className="home-hero">
        <Slideshow images={mainSlides} t={t} />
      </section>

      <div className="main-text">
        <h1 data-value="main_title">{t('main_title')}</h1>
        <p data-value="main_description">
          {t('main_description')}
        </p>
      </div>

      <section className="products-preview">
        <div className="preview-text">
          <h2 data-value="preview_titulo">{t('preview_titulo')}</h2>
          <p data-value="preview_descripcion">{t('preview_descripcion')}</p>
        </div>

        <div className="preview-grid">
          {/* Tarjeta 1: Páprika */}
          <Link to="/paprika" className="product-card">
            <img src="/images/paprika_1.jpeg" alt="Pimiento Páprika" />
            <div className="card-title" data-value="preview-1">{t('product_1')}</div>
          </Link>

          {/* Tarjeta 2: Ajo */}
          <Link to="/garlic" className="product-card">
            <img src="/images/paprika_2.avif" alt="Ajo" />
            <div className="card-title" data-value="preview-2">{t('product_2')}</div>
          </Link>

          {/* Tarjeta 3: Pimiento Ancho */}
          <Link to="/pepper" className="product-card">
            <img src="/images/ajo_2.jpg" alt="Pimiento Ancho" />
            <div className="card-title" data-value="preview-3">{t('product_3')}</div>
          </Link>
        </div>
      </section>
    </main>
  );
}