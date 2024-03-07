import { useContext,useEffect,useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './viewStyles/cartStyle.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    return (
        <div className="cart-container">
            <h3>Your Cart</h3>
            <div className="cart-table">
            {cartState.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">${item.price}</p>
                    <div 
                    onClick={() => cartDispatch({type:'REMOVE_FROM_CART',id:item.id})}
                    className="delete-btn">Delete</div>
                </div>
            ))}
            </div>
            <Link to={`/products`}>
                <span>Continue Shopping</span>
            </Link>
        </div>
    );
}
 
export default Cart;