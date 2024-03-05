import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/views/Home';
import Cart from './components/views/Cart';
import Products from './components/views/Products';
import ProductContextProvider from './contexts/ProductContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
        </ProductContextProvider>
      </Router>
    </div>
  );
}

export default App;
