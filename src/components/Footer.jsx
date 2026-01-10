import { Link } from 'react-router-dom';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#28623f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Sección Superior: 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Identidad */}
          <div className="space-y-4">
            <img 
              src="/images/gutierrez_logo.png" 
              alt="Agroguti Logo" 
              className="h-16 w-auto brightness-0 invert opacity-90" 
            />
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
              Líderes en la producción y exportación de productos agrícolas de alta calidad desde Majes, Perú para el mundo.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              {t('nav_productos') || 'Productos'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/paprika" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> {t('product_1')}
                </Link>
              </li>
              <li>
                <Link to="/garlic" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> {t('product_2')}
                </Link>
              </li>
              <li>
                <Link to="/pepper" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> {t('product_3')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Global */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
              {t('nav_contact') || 'Contacto'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-green-300"></i>
                <p className="text-gray-200">Majes, Arequipa - Perú</p>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <i className="fa-solid fa-envelope text-green-300"></i>
                <a href="mailto:jgutierrez@agroguti.com" className="hover:underline">jgutierrez@agroguti.com</a>
              </div>
              
              {/* Iconos Sociales Integrados */}
              <div className="flex gap-4 pt-4">
                <a href="https://facebook.com/agronegocios.gutierrez" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://linkedin.com/company/agronegocios-e-inversiones-gutierrez" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/+51956899907" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-500 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea de Separación */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300 uppercase tracking-widest">
          <p>© {currentYear} Agronegocios e Inversiones Gutierrez. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-earth-americas"></i> Global Export
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-leaf"></i> 100% Organic Quality
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}