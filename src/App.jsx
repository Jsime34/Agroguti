import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  const [lang, setLang] = useState('es');

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 bg-[url('/images/fondo.png')] bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-500">

        <Header setLanguage={setLang} t={t} lang={lang} />

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
    </HashRouter>
  );
}

export default App;
