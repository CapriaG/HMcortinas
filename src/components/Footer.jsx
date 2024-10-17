import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logosolo.png';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Columna del logo */}
                    <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3">
                        <img src={logo} alt="Logo" className="footer-logo" />
                    </div>

                    {/* Columna de la flecha */}
                    <div className="col-md-4 d-flex justify-content-center mb-3">
                        <button className="scroll-to-top" onClick={scrollToTop}>
                            <FaArrowUp />
                        </button>
                    </div>

                    {/* Columna de información relevante */}
                    <div className="col-md-4 d-flex flex-column align-items-center align-items-md-end mb-3">
                        <p className="footer-info">Teléfono: 1159580880</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} MH Cortinas Metalicas Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;