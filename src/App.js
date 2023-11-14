import './App.css';

import Headernav from './component/nav/Headernav.js';
import Carouselflowers from './component/carousel/Carouselflowers';
import Products from './component/products/Products';
import Poster from './component/poster/Poster';
import ContactInfo from './component/contactInfo/ContactInfo';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Headernav />
      <Carouselflowers />
      <Products />
      <Poster />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
