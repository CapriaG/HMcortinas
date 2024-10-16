import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aceite1 from '../assets/tablillaciega.png'; 

const PTablillas = () => {
  const [modal, setModal] = useState({ isOpen: false, product: null });

  const tablillas = [
    { id: 1, img: Aceite1, name: "• Tablilla plana ciega galvanizada", description: "La tablilla plana ciega galvanizada es una lámina metálica utilizada en la fabricación de persianas o cortinas metálicas. Estas tablillas son completamente opacas lo que significa que no permiten el paso de luz ni aire, ofreciendo mayor privacidad y seguridad." },
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
        <h2>Tablillas</h2>
        <div className="row">
          {tablillas.map((producto) => (
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

export default PTablillas;