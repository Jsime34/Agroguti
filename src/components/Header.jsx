import { Link } from 'react-router-dom';

export default function Header({ setLanguage, t }) {
  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* 1. Banner Superior - Ahora con Verde #28623f */}
      <div className="bg-[#28623f] text-white py-1 px-4 text-center text-xs font-medium tracking-wide border-b border-white/10">
        <p>
          {t('banner_text')} | <i className="fa-solid fa-truck-fast ml-2"></i> {t('Exportación de calidad') || 'Calidad de Exportación'}
        </p>
      </div>

      {/* 2. Navegador Principal */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/gutierrez_logo.png" 
                alt="Agroguti Logo" 
                className="h-12 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
              /> 
            </Link>
          </div>

          {/* NAVEGACIÓN */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-[#28623f] font-semibold transition-colors uppercase text-sm tracking-wider">
                  {t('nav_inicio')}
                </Link>
              </li>
              
              {/* DROPDOWN PRODUCTOS */}
              <li className="group relative py-4">
                <span className="flex items-center gap-1 text-gray-700 group-hover:text-[#28623f] font-semibold cursor-pointer uppercase text-sm tracking-wider transition-colors">
                  {t('nav_productos')}
                  <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
                </span>
                
                {/* Menú desplegable */}
                <ul className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <li><Link to="/paprika" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors font-medium">{t('product_1')}</Link></li>
                  <li><Link to="/garlic" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors font-medium">{t('product_2')}</Link></li>
                  <li><Link to="/pepper" className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-[#28623f] transition-colors font-medium">{t('product_3')}</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/nosotros" className="text-gray-700 hover:text-[#28623f] font-semibold transition-colors uppercase text-sm tracking-wider">
                  {t('nav_about')}
                </Link>
              </li>
              
              {/* BOTÓN CONTACTO - Verde con Hover oscuro */}
              <li>
                <Link to="/contacto" className="bg-[#28623f] hover:bg-[#1e4a30] text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95 text-sm uppercase tracking-wider block">
                  {t('nav_contact')}
                </Link>
              </li>

              {/* SELECTOR DE IDIOMAS */}
              <li className="flex items-center gap-2 border-l pl-6 ml-2 border-gray-200">
                <button 
                  onClick={() => setLanguage('es')} 
                  className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
                >
                  <span className="fi fi-es rounded-sm shadow-sm" title="Español"></span>
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
                >
                  <span className="fi fi-us rounded-sm shadow-sm" title="English"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* BOTÓN MÓVIL */}
          <div className="md:hidden">
            <button className="text-gray-700 text-2xl hover:text-[#28623f] transition-colors">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}