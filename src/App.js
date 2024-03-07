import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/views/Home';
import Cart from './components/views/Cart';
import Footer from './components/footer/Footer';
import Products from './components/views/Products';
import ProductContextProvider from './contexts/ProductContext';
import ProductSingleView from './components/views/ProductSingleView';
import CartContextProvider from './contexts/CartContext';
import PrivacyPolicy from './components/views/PrivacyPolicy';


function App() {
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
        <ProductContextProvider>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductSingleView/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          
        </Routes>
        </ProductContextProvider>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
