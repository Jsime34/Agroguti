import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Paprika from './pages/Paprika';
import Garlic from './pages/Garlic';
import Pepper from './pages/Pepper';
import NotFound from './pages/NotFound';

import { translations } from './constants/translations';

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

  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 bg-[url('/images/fondo.png')] bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-500">

        <Header setLanguage={handleSetLanguage} t={t} lang={lang} />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/nosotros" element={<Nosotros t={t} />} />
            <Route path="/contacto" element={<Contacto t={t} />} />
            <Route path="/paprika" element={<Paprika t={t} />} />
            <Route path="/garlic" element={<Garlic t={t} />} />
            <Route path="/pepper" element={<Pepper t={t} />} />
            <Route path="*" element={<NotFound t={t} />} />
          </Routes>
        </main>

        <Footer t={t} />

      </div>
    </BrowserRouter>
  );
}

export default App;
