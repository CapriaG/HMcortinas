import { useState } from 'react';
import { Link } from 'react-router-dom';
import Paralelo from '../assets/motorparalelo.png';
import Nacional from '../assets/motornacional.png'; 

const PMotores = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const motores = [
    { id: 1, img: Paralelo, name: "•	Motor Paralelo", description: "El motor paralelo es un tipo de mecanismo utilizado en cortinas metálicas automatizadas. Su principal característica es que está instalado de forma adyacente al eje de la cortina, lo que permite un accionamiento eficiente. Este motor es ideal para cortinas de mayor peso, ya que su diseño optimiza la transmisión de potencia directamente al eje, garantizando un movimiento suave y preciso, incluso en cortinas de gran tamaño" },
    { id: 2, img: Nacional, name: "•	Motor Nacional", description: "El Motor Nacional destaca por su calidad, confiabilidad y durabilidad, adaptados a las necesidades del mercado. Son motores robustos, ideales para el uso intensivo en locales comerciales, industrias o residencias." },
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
        <h2>Motores</h2>
        <div className="row">
          {motores.map((producto) => (
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

export default PMotores;