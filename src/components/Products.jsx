import { Link } from 'react-router-dom';
import Motores from "../assets/motor-p.png";
import Cortinas from "../assets/cortina-p.png";
import logo from "../assets/logosolo.png"


const Products = () => {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title-products">Nuestros Productos</h2>
        <div className="row">
          <div className="col-md-4">
            <Link to="/products/motores">
              <div className="product-image-wrapper">
                <img src={Motores} alt="Lubricantes" className="product-image" />
                <div className="overlayP">
                  <h5>Motores</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
              <div className="product-image-wrapper">
                <img src={logo} alt="Aceites" className="product-image" />
              </div>
          </div>

          <div className="col-md-4">
            <Link to="/products/cortinas">
              <div className="product-image-wrapper">
                <img src={Cortinas} alt="Aceites" className="product-image" />
                <div className="overlayP">
                  <h5>Cortinas</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
