import React from 'react';
import Slideshow from '../components/Slideshow';

export default function Garlic({ t }) {
    // 1. Definimos los arreglos de imágenes para cada galería
    const whiteGarlicImages = [
        { src: "/images/ajo_1.jpg", textKey: "slide1_text" },
        { src: "/images/ajo_2.jpg", textKey: "slide2_text" },
        { src: "/images/ajo_3.jpeg", textKey: "slide3_text" }
    ];

    const purpleGarlicImages = [
        { src: "/images/pimiento_1.jpg", textKey: "slide1_text" },
        { src: "/images/pimiento_2.jpg", textKey: "slide2_text" },
        { src: "/images/pimiento_3.jpg", textKey: "slide3_text" }
    ];

    const napuriImages = [
        { src: "/images/proceso_1.jpg", textKey: "slide1_text" },
        { src: "/images/proceso_2.jpg", textKey: "slide2_text" },
        { src: "/images/proceso_3.jpg", textKey: "slide3_text" }
    ];

    return (
        <main className='main-text'>
            <h2 data-value="garlic_title">{t('garlic_title')}</h2>   
            <p data-value="garlic_description">{t('garlic_description')}</p>
            
            <h2 data-value="garlic_varieties_title">{t('garlic_varieties_title')}</h2>

            {/* SECCIÓN AJO BLANCO */}
            <section id="ajo-blanco">
                <h2 data-value="garlic_white_title">{t('garlic_white_title')}</h2>
                <div className="garlic-section">
                    <div className="garlic-text">
                        <h3 data-value="garlic_white_color">{t('garlic_white_color')}</h3>
                        <h3 data-value="garlic_white_size_title">{t('garlic_white_size_title')}</h3>
                        <ul>
                            <li data-value="garlic_white_size1">{t('garlic_white_size1')}</li>
                            <li data-value="garlic_white_size2">{t('garlic_white_size2')}</li>
                            <li data-value="garlic_white_size3">{t('garlic_white_size3')}</li>
                        </ul>
                        <h3 data-value="garlic_white_packing_title">{t('garlic_white_packing_title')}</h3>
                        <p data-value="garlic_white_packing">{t('garlic_white_packing')}</p>
                    </div>
                    
                    <div className="garlic-slideshow">
                        <h2 data-value="garlic_gallery_title">{t('garlic_gallery_title')}</h2>
                        <Slideshow images={whiteGarlicImages} t={t} />
                    </div>
                </div>
            </section>

            {/* SECCIÓN AJO MORADO */}
            <h2 data-value="garlic_purple_title">{t('garlic_purple_title')}</h2>
            <div className="garlic-section">
                <div className="garlic-text">
                    <h3 data-value="garlic_purple_color_title">{t('garlic_purple_color_title')}</h3>
                    <h4 data-value="garlic_purple_color_value">{t('garlic_purple_color_value')}</h4>
                    <h3 data-value="garlic_purple_size_title">{t('garlic_purple_size_title')}</h3>
                    <h4 data-value="garlic_purple_size1">{t('garlic_purple_size1')}</h4>
                    <h4 data-value="garlic_purple_size2">{t('garlic_purple_size2')}</h4>
                    <h4 data-value="garlic_purple_size3">{t('garlic_purple_size3')}</h4>
                    <h3 data-value="garlic_purple_packing_title">{t('garlic_purple_packing_title')}</h3>
                    <h4 data-value="garlic_purple_packing1">{t('garlic_purple_packing1')}</h4>
                    <h4 data-value="garlic_purple_packing2">{t('garlic_purple_packing2')}</h4>
                </div>
                <div className="garlic-slideshow">
                    <h2 data-value="garlic_gallery_title">{t('garlic_gallery_title')}</h2>
                    <Slideshow images={purpleGarlicImages} t={t} />
                </div>
            </div>

            {/* SECCIÓN AJO NAPURÍ */}
            <h2 data-value="garlic_napuri_title">{t('garlic_napuri_title')}</h2>
            <div className="garlic-section">
                <div className="garlic-text">
                    <h3 data-value="garlic_napuri_color_title">{t('garlic_napuri_color_title')}</h3>
                    <h4 data-value="garlic_napuri_color_value">{t('garlic_napuri_color_value')}</h4>
                    <h3 data-value="garlic_napuri_size_title">{t('garlic_napuri_size_title')}</h3>
                    <h4 data-value="garlic_napuri_size1">{t('garlic_napuri_size1')}</h4>
                    <h4 data-value="garlic_napuri_size2">{t('garlic_napuri_size2')}</h4>
                    <h4 data-value="garlic_napuri_size3">{t('garlic_napuri_size3')}</h4>
                    <h3 data-value="garlic_napuri_packing_title">{t('garlic_napuri_packing_title')}</h3>
                    <h4 data-value="garlic_napuri_packing1">{t('garlic_napuri_packing1')}</h4>
                    <h4 data-value="garlic_napuri_packing2">{t('garlic_napuri_packing2')}</h4>
                </div>
                <div className="garlic-slideshow">
                    <h2 data-value="garlic_gallery_title">{t('garlic_gallery_title')}</h2>
                    <Slideshow images={napuriImages} t={t} />
                </div>
            </div>
        </main>
    );
}