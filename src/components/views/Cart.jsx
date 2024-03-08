import { useContext,useEffect,useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './viewStyles/cartStyle.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    const [checkout,setCheckOut] = useState(false)
    const [total,setTotal] = useState(0);

    useEffect(()=> {
        const totalPrice = cartState.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalPrice);
    },[cartState])
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
            <p>{`Total Price: $ ${total.toFixed(2)}`}</p>
            <button onClick={() => cartDispatch({type:'EMPTY_CART'})}>Empty Cart</button>
            <button onClick={() => { setCheckOut(!checkout) }}>Checkout</button>
            {/* <button onClick={() => cartDispatch({type:'EMPTY_CART'})}>Checkout</button> */}
            {checkout? (
            <div className="confirmation-msg">
                <p>Purchase completed.</p>
                <p>{`Total Price: $ ${total.toFixed(2)}`}</p>
                <button onClick={() => { setCheckOut(!checkout); cartDispatch({ type: 'EMPTY_CART' }); }}>ok</button>
            </div>
                ):(null)}
            
            <Link to={`/products`}>
                <span>Continue Shopping</span>
            </Link>
        </div>
    );
}
 
export default Cart;