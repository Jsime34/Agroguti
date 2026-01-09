export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            {/* Usamos el año actual o el que prefieras */}
            <p>&copy; 2025 Agronegocios e Inversiones Gutierrez</p>
            
            <div className="social-icons">
                {/* En React, por seguridad, siempre añade rel="noopener noreferrer" al usar target="_blank" */}
                <a 
                    href="https://www.facebook.com/agronegocios.gutierrez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                
                <a 
                    href="https://www.linkedin.com/company/agronegocios-e-inversiones-gutierrez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                
                <a 
                    href="https://wa.me/+51956899907" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div> 
    </footer>
  );
}