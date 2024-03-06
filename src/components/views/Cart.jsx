import { useContext,useEffect,useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './cartStyle.css'

const Cart = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    return (
        <div className="cart-container">
            this is cart
            {cartState.map(item => (
                <div key={item.id} className="card-item">
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    <p>{item.price}</p>
                    <div onClick={() => cartDispatch({type:'REMOVE_FROM_CART',id:item.id})}>x</div>
                </div>
            ))}
        </div>
    );
}
 
export default Cart;