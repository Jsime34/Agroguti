import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slideshow from './Slideshow';
import PackingZoom from './PackingZoom';
import AvailabilityCalendar from './AvailabilityCalendar';

// Generic product page. Renders any product from src/data/products.js.
// Single-variant products use the Paprika/Pepper layout.
// Multi-variant products (variants.length > 1) use the Garlic layout
// with alternating image side.

function VariantSection({ variant, lang, multiVariant, index, t }) {
  const accent = variant.accent;
  const sizes = (variant.sizes && variant.sizes[lang]) || [];
  const packingItems = (variant.packing && variant.packing[lang]) || [];

  // Garlic-style inline sizes vs Paprika-style list.
  const inlineSizes = variant.sizesStyle === 'inline';

  // Alternate image position on every other variant section (Garlic pattern).
  const imageFirst = multiVariant && index % 2 === 1;

  const SpecsBlock = (
    <div className="space-y-6">
      <div className={`inline-block px-4 py-1 ${accent.bgChip} ${accent.textChip} rounded-full text-sm font-bold uppercase tracking-widest mb-2`}>
        {variant.tag[lang]}
      </div>

      <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
        {variant.title[lang]}
      </h2>

      {/* Glassmorphism specs box */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 space-y-6">

        {/* Color + Humidity */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">
              {t('specs_color') || 'Color'}
            </span>
            <p className="text-gray-700 font-medium">{variant.color[lang]}</p>
          </div>
          <div>
            <span className="block text-xs font-bold text-[#28623f] uppercase mb-1">
              {t('specs_humidity') || 'Humedad'}
            </span>
            <p className="text-gray-700 font-medium">{variant.humidity[lang]}</p>
          </div>
        </div>

        {/* Sizes */}
        <div className="pt-4 border-t border-gray-200/50">
          <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">
            {t('specs_size') || 'Tamaño'}
          </span>
          {inlineSizes ? (
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <i className={`fa-solid fa-ruler-horizontal ${accent.iconColor} text-xs`}></i>
              {sizes.join(' - ')}
            </p>
          ) : (
            <ul className="space-y-1">
              {sizes.map((s, i) => (
                <li key={i} className="text-gray-700 flex items-center gap-2">
                  <i className={`fa-solid fa-ruler-horizontal text-xs ${accent.iconColor}`}></i> {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Packing */}
        <div className="pt-4 border-t border-gray-200/50">
          <span className="block text-xs font-bold text-[#28623f] uppercase mb-2">
            {t('specs_packing') || 'Packing'}
          </span>
          <div className={packingItems.length > 1 ? 'space-y-2' : 'grid grid-cols-1 gap-3'}>
            {packingItems.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/50">
                <i className="fa-solid fa-box-archive text-[#28623f]"></i>
                <p className="text-sm text-gray-600">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Map plain image strings to the { src, textKey } shape Slideshow expects.
  const slideshowImages = variant.images.map((src) => ({ src, textKey: '' }));

  // Slideshow wrapper style differs between single- and multi-variant layouts
  // to preserve the original look (Paprika hover-scale vs Garlic fixed aspect).
  const slideshowWrapperClass = multiVariant
    ? 'rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square'
    : 'rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.01] duration-500';

  const GalleryBlock = (
    <div className="space-y-6">
      <div className={slideshowWrapperClass}>
        <Slideshow images={slideshowImages} t={t} showText={false} />
      </div>
      {variant.extraInfo && (
        <div className="bg-[#28623f]/10 p-4 rounded-2xl border border-[#28623f]/20">
          <p className="text-sm text-[#28623f] text-center font-medium">
            <i className="fa-solid fa-fire-flame-curved mr-2"></i>
            {variant.extraInfo[lang]}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {imageFirst ? (
        <>
          <div className="order-2 lg:order-1">{GalleryBlock}</div>
          <div className="order-1 lg:order-2">{SpecsBlock}</div>
        </>
      ) : (
        <>
          {SpecsBlock}
          {GalleryBlock}
        </>
      )}
    </section>
  );
}

export default function ProductPage({ product, lang, t }) {
  const multiVariant = product.variants.length > 1;

  return (
    <main className="min-h-screen pt-10 pb-20">
      <Helmet>
        <title>{product.seo.title[lang]}</title>
        <meta name="description" content={product.seo.description[lang]} />
        <meta property="og:url" content={`https://agroguti.com/${product.slug}`} />
        <meta property="og:title" content={product.seo.title[lang]} />
        <meta property="og:description" content={product.seo.description[lang]} />
        <meta property="og:image" content={product.seo.ogImage} />
      </Helmet>

      {/* Encabezado Principal */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#28623f] mb-6 font-montserrat uppercase tracking-tight">
          {product.hero.title[lang]}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {product.hero.description[lang]}
        </p>
      </div>

      {/* Variants */}
      <div className={multiVariant ? 'max-w-7xl mx-auto px-6 space-y-24 mb-24' : 'max-w-7xl mx-auto px-6 mb-24'}>
        {product.variants.map((variant, i) => (
          <React.Fragment key={variant.key}>
            <VariantSection
              variant={variant}
              lang={lang}
              multiVariant={multiVariant}
              index={i}
              t={t}
            />
            {variant.availability && (
              <AvailabilityCalendar
                availability={variant.availability}
                lang={lang}
                t={t}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {!product.variants.some((v) => v.availability) && (
        <AvailabilityCalendar
          availability={product.availability}
          lang={lang}
          t={t}
        />
      )}

      {product.packing && (
        <PackingZoom
          title={product.packing.title[lang]}
          description={product.packing.description[lang]}
          imageSrc={product.packing.image}
        />
      )}
    </main>
  );
}
