import { useNavigate } from "react-router-dom";
import './navStyle.css'
import {ReactComponent as Logo} from '../../assets/logo-amazon.svg'
import {ReactComponent as Cart} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import { useState,useContext,useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
    const navigate = useNavigate();
    const {cartState} = useContext(CartContext)
    return (
        <nav className="navbar">
            <Logo 
            className="nav-logo"
            onClick={() => navigate('/')}/>

            <div className="nav-cart" onClick={() => navigate('/cart')}>
                <div className="cart-count">
                    {cartState? (<p>{cartState.length}</p>):(<p>0</p>)}
                    {/* {cartState? cartState.length :0} */}
                </div>
                <Cart 
                className="cart"
                // onClick={() => navigate('/cart')}
                />
            </div>
        </nav>
    );
}
 
export default Navbar;