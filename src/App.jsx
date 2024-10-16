import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import PMotores from './components/P-motores';
import PCortinas from './components/P-cortinas';
import PTablillas from './components/P-tablillas';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />

          {/* Rutas para las páginas de productos */}
        <Route path="/products/motores" element={<PMotores />} />
        <Route path="/products/cortinas" element={<PCortinas />} />
        <Route path="/products/tablillas" element={<PTablillas />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;