import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import hm from '../assets/imageH2.png';
import workImage1 from '../assets/t1.png';
import workImage2 from '../assets/t2.png';
import workImage3 from '../assets/t3.png';
import workImage4 from '../assets/t4.png';
import workImage5 from '../assets/t5.png';
import workImage6 from '../assets/t6.png';
import workImage7 from '../assets/t7.png';
import workImage8 from '../assets/t8.png';

import service1 from "../assets/s1.png";
import service2 from "../assets/s2.png";
import service3 from "../assets/s3.png";
import { Link } from "react-router-dom";
import ctaImage from "../assets/hm.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <div className="custom-arrow custom-next">➡</div>,
    prevArrow: <div className="custom-arrow custom-prev">⬅</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleArrowClick = () => {
    const nextSection = document.getElementById('services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`home vh-90 d-flex flex-column justify-content-center align-items-center text-center ${className}`}>
        <div className="background-overlay">
          <img src={hm} alt="Logo HM" className="center-image mb-4" />
        </div>
        <div className="arrow-down" onClick={handleArrowClick}>
          ⬇
        </div>
      </div>

      <section id="services-section" className="services-section">
        <div className="services-background">
          <div className="container my-5">
            <h2 className="services-title">¿Qué servicios brindamos?</h2>
            <div className="services-container d-flex flex-row-reverse justify-content-between">
              <div className="service-item text-center">
                <img src={service1} alt="Servicio 1" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Automatización</h3>
                  <p>Convertimos sus cortinas metálicas en automáticas para mayor comodidad.</p>
                </div>
              </div>
              <div className="service-item text-center">
                <img src={service3} alt="Servicio 3" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Mantenimiento y Reparación</h3>
                  <p>Brindamos servicios de mantenimiento para asegurar el óptimo funcionamiento.</p>
                </div>
              </div>
              <div className="service-item text-center">
                <img src={service2} alt="Servicio 2" className="service-image rounded-image" />
                <div className="service-text">
                  <h3 className="service-title">Instalación</h3>
                  <p>Ofrecemos la instalación profesional de cortinas metálicas de alta calidad.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/contact" className="consult-btn">consultanos ya</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="work-section" className="work-section container py-5">
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <h2 className="work-title text-center">Nuestros trabajos</h2>
          </div>

          <Slider {...settings}>
            <div className="carousel-item-container">
              <img src={workImage1} alt="Trabajo 1" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage2} alt="Trabajo 2" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage3} alt="Trabajo 3" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage4} alt="Trabajo 4" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage5} alt="Trabajo 5" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage6} alt="Trabajo 6" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage7} alt="Trabajo 7" className="carousel-img img-fluid rounded-image" />
            </div>
            <div className="carousel-item-container">
              <img src={workImage8} alt="Trabajo 8" className="carousel-img img-fluid rounded-image" />
            </div>
          </Slider>
        </div>
      </section>

      <section id="cta-section" className="cta-section">
        <div className="cta-background">
          <div className="container">
            <div className="cta-image-container">
              <img src={ctaImage} alt="Imagen CTA" className="cta-image" />
            </div>

            <div className="text-center mt-4">
              <Link to="/Products" className="cta-btn">Conoce nuestros productos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Define prop types
Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
