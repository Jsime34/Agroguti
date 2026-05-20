import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ProductPage from './components/ProductPage';
import NotFound from './pages/NotFound';

import { translations } from './constants/translations';
import { getAllProducts } from './lib/productsRepo';

function Analytics() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname });
    }
  }, [location.pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  const handleSetLanguage = (newLang) => {
    localStorage.setItem('lang', newLang);
    setLang(newLang);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  const products = getAllProducts();

  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 bg-[url('/images/fondo.png')] bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-500">

        <Header setLanguage={handleSetLanguage} t={t} lang={lang} />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home t={t} lang={lang} />} />
            <Route path="/nosotros" element={<Nosotros t={t} />} />
            <Route path="/contacto" element={<Contacto t={t} />} />
            {products.map((p) => (
              <Route
                key={p.slug}
                path={`/${p.slug}`}
                element={<ProductPage product={p} lang={lang} t={t} />}
              />
            ))}
            <Route path="*" element={<NotFound t={t} />} />
          </Routes>
        </main>

        <Footer t={t} lang={lang} />

      </div>
    </BrowserRouter>
  );
}

export default App;
