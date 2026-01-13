import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setLanguage, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* 1. Banner Superior */}
      <div className="bg-[#28623f] text-white py-1 px-4 text-center text-[10px] md:text-xs font-medium tracking-wide border-b border-white/10">
        <p>
          {t('banner_text')} | <i className="fa-solid fa-truck-fast ml-2"></i> {t('export_quality') || 'Calidad de Exportación'}
        </p>
      </div>

      {/* 2. Navegador Principal */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img 
                src="/images/gutierrez_logo.png" 
                alt="Agroguti Logo" 
                className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
              /> 
            </Link>
          </div>

          {/* NAVEGACIÓN ESCRITORIO (md+) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-[#28623f] font-semibold transition-colors uppercase text-sm tracking-wider">
                  {t('nav_inicio')}
                </Link>
              </li>
              
              <li className="group relative py-4">
                <span className="flex items-center gap-1 text-gray-700 group-hover:text-[#28623f] font-semibold cursor-pointer uppercase text-sm tracking-wider transition-colors">
                  {t('nav_productos')}
                  <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
                </span>
                <ul className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-gray-100 py-2">
                  <li><Link to="/paprika" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors">{t('product_1')}</Link></li>
                  <li><Link to="/garlic" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors">{t('product_2')}</Link></li>
                  <li><Link to="/pepper" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors">{t('product_3')}</Link></li>
                </ul>
              </li>

              <li><Link to="/nosotros" className="text-gray-700 hover:text-[#28623f] font-semibold transition-colors uppercase text-sm tracking-wider">{t('nav_about')}</Link></li>
              
              <li>
                <Link to="/contacto" className="bg-[#28623f] hover:bg-[#1e4a30] text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider block">
                  {t('nav_contact')}
                </Link>
              </li>

              {/* IDIOMAS ESCRITORIO */}
              <li className="flex items-center gap-2 border-l pl-6 ml-2 border-gray-200">
                <button onClick={() => setLanguage('es')} className="opacity-60 hover:opacity-100"><span className="fi fi-es rounded-sm"></span></button>
                <button onClick={() => setLanguage('en')} className="opacity-60 hover:opacity-100"><span className="fi fi-us rounded-sm"></span></button>
              </li>
            </ul>
          </nav>

          {/* BOTÓN MÓVIL (Hamburguesa) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Selector de idiomas rápido para móvil */}
            <div className="flex gap-2 mr-2">
              <button onClick={() => setLanguage('es')} className="text-xs font-bold text-gray-500 hover:text-[#28623f]">ES</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLanguage('en')} className="text-xs font-bold text-gray-500 hover:text-[#28623f]">EN</button>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`fixed inset-0 bg-white z-[60] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button onClick={closeMenu} className="text-3xl text-gray-700">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <nav className="flex-grow flex flex-col items-center justify-center gap-8">
            <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-gray-800 uppercase tracking-widest">{t('nav_inicio')}</Link>
            
            <div className="text-center group">
              <span className="text-2xl font-bold text-gray-400 uppercase tracking-widest block mb-4">{t('nav_productos')}</span>
              <div className="flex flex-col gap-4">
                <Link to="/paprika" onClick={closeMenu} className="text-xl text-gray-700">{t('product_1')}</Link>
                <Link to="/garlic" onClick={closeMenu} className="text-xl text-gray-700">{t('product_2')}</Link>
                <Link to="/pepper" onClick={closeMenu} className="text-xl text-gray-700">{t('product_3')}</Link>
              </div>
            </div>

            <Link to="/nosotros" onClick={closeMenu} className="text-2xl font-bold text-gray-800 uppercase tracking-widest">{t('nav_about')}</Link>
            <Link to="/contacto" onClick={closeMenu} className="bg-[#28623f] text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg">
              {t('nav_contact')}
            </Link>
          </nav>

          <div className="p-10 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} AGROGUTI
          </div>
        </div>
      </div>
    </header>
  );
}