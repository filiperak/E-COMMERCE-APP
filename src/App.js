import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/views/Home';
import Cart from './components/views/Cart';
import Products from './components/views/Products';
import ProductContextProvider from './contexts/ProductContext';
import ProductSingleView from './components/views/ProductSingleView';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
        <ProductContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductSingleView/>}/>
        </Routes>
        </ProductContextProvider>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
