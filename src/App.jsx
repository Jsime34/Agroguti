import React, { useState } from 'react'; // Importamos useState
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Importaciones de páginas
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Paprika from './pages/Paprika';
import Garlic from './pages/Garlic';
import Pepper from './pages/Pepper';

// Importamos el objeto de traducciones que creaste
import { translations } from './constants/translations';

function App() {
  // 1. Estado para el idioma (por defecto español)
  const [lang, setLang] = useState('es');

  // 2. Función traductora 't'
  // Busca una clave (ej: 'nav_inicio') en el idioma actual
  const t = (key) => {
    return translations[lang][key] || key; 
  };

  return (
    <HashRouter>
      {/* El DIV envolvente con la imagen de fondo */}
        <div className="min-h-screen bg-gray-100 bg-[url('/images/fondo.png')] bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-500">
        
        {/* 3. Pasamos la función para cambiar idioma y la función 't' al Header */}
        <Header setLanguage={setLang} t={t} /> 
        
        <main className="relative z-10">
          <Routes>
            {/* 4. Pasamos 't' a cada página para que sepan cómo traducirse */}
            <Route path="/" element={<Home t={t} />} />
            <Route path="/nosotros" element={<Nosotros t={t} />} />
            <Route path="/contacto" element={<Contacto t={t} />} />
            <Route path="/paprika" element={<Paprika t={t} />} />
            <Route path="/garlic" element={<Garlic t={t} />} />
            <Route path="/pepper" element={<Pepper t={t} />} />
          </Routes>
        </main>

        <Footer t={t} />
        
      </div>
    </HashRouter>
  );
}

export default App;