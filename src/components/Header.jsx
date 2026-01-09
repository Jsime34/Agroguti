import { Link } from 'react-router-dom';

export default function Header({ setLanguage, t }) {
  return (
    <header>
      <div className="top-banner">
        <p className="banner-text">{t('banner_text')}</p>
      </div>
      <div className="header-container">
        <div className="logo-placeholder">
          <Link to="/">
            <img 
              id="logo" 
              src="/images/gutierrez_logo.png" 
              alt="Logo" 
              style={{ height: '50px' }} 
            /> 
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">{t('nav_inicio')}</Link></li>
            
            <li className="dropdown">
              <span className="dropdown-label">{t('nav_productos')}</span>
              <ul className="dropdown-content">
                <li><Link to="/paprika">{t('product_1')}</Link></li>
                <li><Link to="/garlic">{t('product_2')}</Link></li>
                <li><Link to="/pepper">{t('product_3')}</Link></li>
              </ul>
            </li>

            <li><Link to="/nosotros">{t('nav_about')}</Link></li>
            <li><Link to="/contacto" className="contact-btn">{t('nav_contact')}</Link></li>
            
            <li className="lang-item">
              <button className="lang-btn" onClick={() => setLanguage('es')}>
                <span className="fi fi-es" title="Español"></span>
              </button>
            </li>
            <li className="lang-item">
              <button className="lang-btn" onClick={() => setLanguage('en')}>
                <span className="fi fi-us" title="English"></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="main-title">{t('main_title')}</h1>
    </header>
  );
}