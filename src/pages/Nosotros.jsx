export default function Nosotros() {
  return (
    <main>
        <div className="main-text">
            <section className="reveal slide-left">
                <h2 data-value="vision_titulo">Visión</h2>   
                <p data-value="vision_texto">Ser la compañía comercializadora de alimentos líder caracterizada por brindar un servicio 
                de calidad en compromiso con las personas y respeto del medio ambiente...</p>
                <div className="image-container">
                    <img src="images/proceso_1.jpg" alt="Visión Agronegocios" className="animated-img"/>
                </div>
            </section>

            <section className="reveal slide-right">
                <h2 data-value="mision_titulo">Misión</h2>
                <p data-value="mision_texto">Generar valor manteniendo el compromiso de calidad, trazabilidad y salubridad con nuestros clientes.</p>
                <div className="image-container">
                    <img src="images/proceso_2.jpg" alt="Misión Agronegocios" className="animated-img"/>
                </div>
            </section>

            <h1 data-value="export_countries_title">¿A que países exportamos?</h1>
            <h2 data-value="usa_title">ESTADOS UNIDOS</h2>
            <p data-value="usa_description">Estados Unidos de América es una república federal constitucional compuesta por 50 estados y un distrito federal. 
                Es la principal economía del mundo. Este país tiene un alto poder adquisitivo. Es gran protagonista en el comercio exterior. 
                Fue el segundo país exportador y primer importador de bienes en 2020. Fue el mercado más importante para las exportaciones de 
                los capsicum peruanos.</p>
            <h2 data-value="mexico_title">MEXICO</h2>
            <p data-value="mexico_description">México se constituye en el quinto país más extenso del continente americano y el tercero entre los países latinoamericanos.
            Este mercado creció a tasas elevadas en capsicum incluso durante los meses más críticos de la pandemia.
            </p>
            <h2 data-value="spain_title">ESPAÑA</h2>
            <p data-value="spain_description">España es un país miembro de la Unión Europea. Presenta una de las mayores tasas de inmigración a nivel mundial y ha 
                alcanzado un gran progreso económico durante las últimas décadas.
                Sin embargo, permanece aún detrás de muchos países de Europa Occidental. Se consolidó como uno de los mercados 
                con mayor acogida en capsicum peruanos.
            </p>
        </div>
    </main>
  );
}