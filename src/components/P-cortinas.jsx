import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pmicro from '../assets/persianamicro.png';
import Pame from '../assets/pamep.png';
import Tablilla from '../assets/persianaame.png'; 

const PCortinas = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const cortinas = [
    { id: 1, img: Pmicro, name: "•	Persiana Microperforada", description: "Las persianas microperforadas son un tipo de cortina metálica que incorpora pequeños orificios en cada una de sus láminas. Estas perforaciones permiten la ventilación y el paso de luz, lo que las convierte en una opción ideal para locales comerciales que necesitan mantener cierta visibilidad hacia el exterior cuando están cerradas, sin comprometer la seguridad." },
    { id: 2, img: Pame, name: "•	Persiana Americana", description: "La persiana americana es un tipo de cortina metálica caracterizada por tener tablillas de mayor grosor y resistencia. Este diseño permite una mayor seguridad frente a intentos de ingreso no autorizado, además de ser muy resistente al desgaste por uso o factores climáticos. Son ampliamente utilizadas en comercios e industrias que requieren una cortina robusta, con la capacidad de soportar un uso intensivo y garantizar la protección del lugar." },
    { id: 1, img: Tablilla, name: "• Persiana ciega galvanizada", description: "La tablilla plana ciega galvanizada es una lámina metálica utilizada en la fabricación de persianas o cortinas metálicas. Estas tablillas son completamente opacas lo que significa que no permiten el paso de luz ni aire, ofreciendo mayor privacidad y seguridad." },
  ];

  const openModal = (product) => {
    setModal({ isOpen: true, product });
  };

  const closeModal = () => {
    setModal({ isOpen: false, product: null });
  };

  return (
    <section className="custom-products-section">
    <Link to="/products" className="back-arrow">
        ← Volver a Productos
      </Link>
      <div className="container">
        <h2>Cortinas</h2>
        <div className="row">
          {cortinas.map((producto) => (
            <div key={producto.id} className="col-md-4">
              <div className="custom-product-card" onClick={() => openModal(producto)}>
                <img src={producto.img} alt={producto.name} className="custom-product-image" />
                <h5>{producto.name}</h5>
                <p>{producto.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal.isOpen && (
        <div className="product-modal-overlay active" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={modal.product.img} alt={modal.product.name} />
            <h5>{modal.product.name}</h5>
            <p>{modal.product.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PCortinas;