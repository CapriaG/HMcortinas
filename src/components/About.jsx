import { Carousel } from 'react-bootstrap';
import somos from "../assets/somos.png";
import calidad from "../assets/calidad.png"
import seguridad from "../assets/seguridad.png";
import innovacion from "../assets/innovacion.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <Carousel controls={false} indicators={false} interval={1500} fade={true}>
          <Carousel.Item>
            <div className="hero-slide slide1"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-slide slide2"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero-slide slide3"></div>
          </Carousel.Item>
        </Carousel>
        <div className="hero-text text-center">
          <img
            src={somos}
            alt="HM Logo"
            className="hero-logo"
          />
          <p className="hero-subtitle">Expertos en cortinas metálicas modernas y seguras</p>
        </div>
      </section>

      {/* Misión, Visión y Valores Section */}
      <section className="mission-vision-values-section d-flex justify-content-center">
        <div className="text-block">
          <h2 className="section-title">Nuestra Misión</h2>
          <i className="fas fa-arrow-up arrow-up"></i>
          <p className="section-text">
            En MH, nos dedicamos a proveer cortinas metálicas de alta calidad que garantizan la seguridad y elegancia en cada espacio.
          </p>
        </div>
        <div className="text-block">
          <h2 className="section-title">Nuestra Visión</h2>
          <i className="fas fa-arrow-up arrow-up"></i>
          <p className="section-text">
            Ser reconocidos como líderes en soluciones de seguridad y estética para espacios residenciales y comerciales.
          </p>
        </div>
        <div className="text-block">
          <h2 className="section-title">Nuestros Valores</h2>
          <i className="fas fa-arrow-up arrow-up"></i>
          <p className="section-text">
            Innovación, compromiso y calidad son los pilares fundamentales que nos impulsan a ofrecer el mejor servicio en el mercado.
          </p>
        </div>
      </section>



      <section id="services-section" className="services-section">
        <div className="services-background-about">
          <div className="container my-5">
            <h2 className="services-title-about">¿Cuáles son nuestras prioridades?</h2>
            <div className="services-container d-flex flex-row-reverse justify-content-between">
              <div className="service-item text-center">
                <img src={calidad} alt="Servicio 1" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Calidad</h3>
                  <p>Materiales y fabricación que superan los estándares del mercado.</p>
                </div>
              </div>
              <div className="service-item text-center">
                <img src={seguridad} alt="Servicio 3" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Seguridad</h3>
                  <p>Cortinas metálicas diseñadas para proteger lo que más nos importa.</p>
                </div>
              </div>
              <div className="service-item text-center">
                <img src={innovacion} alt="Servicio 2" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Innovacón</h3>
                  <p>Soluciones tecnológicas avanzadas para cortinas modernas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Compromiso con el Cliente */}
      <section className="commitment-section">
        <div className="container my-5">
          <h2 className="commitment-title text-center">Nuestro Compromiso con el Cliente</h2>
          <p className="commitment-text text-center">
            En MH, nos esforzamos por ofrecer no solo productos de alta calidad, sino también un servicio excepcional para nuestros clientes. 
            Nuestro compromiso es garantizar que cada uno de nuestros proyectos cumpla con los más altos estándares de satisfacción, 
            brindando soluciones seguras y confiables para hogares y negocios.
          </p>
        </div>
      </section>
    </div> 
  );
};

export default AboutUs;