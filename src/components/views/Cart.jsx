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
    const orderBtnFunc = () => {
        setCheckOut(!checkout)
    }

    return(
        <div className="cart-view">
            <div className="cart-container">
                {checkout && total !== 0 ? (
                    <div className="confirm-msg">
                        <h3>Thank you for purchasing!</h3>
                        <div>
                            <span onClick={() => { setCheckOut(!checkout); cartDispatch({ type: 'EMPTY_CART' })}}>Ok</span>
                        </div>
                    </div>
                ):(null)}
                {total !== 0?(
                    <div className="cart-header">
                    <p>Shopping cart</p>
                    <div className="cart-btn-container">
                        <button onClick={() => { setCheckOut(!checkout); cartDispatch({ type: 'EMPTY_CART' }); }}>Remove all</button>
                    </div>
                    </div>
                ):(
                    <div className="cart-header">
                        <h3>Empty cart</h3>
                        <div className="cart-btn-cntainer">
                        <Link to={`/products`}>
                            <span>Shop now</span>
                        </Link>
                        </div>
                    </div>
                )}
                {total !==0?(
                    <div className="cart-products">
                        <div className="cart-product-list">
                        {cartState.map((item,ind) => (
                            <div key={item.id} className="cart-item">
                                <div className="first-item-container">
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className="second-item-container">
                                    <p className="item-title">{item.title}</p>
                                    <p className="item-category">{item.category}</p>
                                </div>
                                <div className="third-item-container">
                                    <p className="item-price">${item.price}</p>
                                    <p onClick={() => cartDispatch({type:'REMOVE_FROM_CART',id:item.id})}>Remove</p>
                                </div>
                            </div>
                        ))}
                        
                        </div>
                        <form className="cart-adress-form">
                            <div className="order-sum">
                                <p>Order summary</p>
                                <p>{`$${total.toFixed(2)}`}</p>
                            </div>
                            
                            <label htmlFor=''>First name:</label>
                            <input type="text" name="" id="" />

                            <label htmlFor=''>Last name:</label>
                            <input type="text" name="" id="" />
                            
                            <label htmlFor=''>Country:</label>
                            <input type="text" name="" id="" />

                            <label htmlFor=''>Address:</label>
                            <input type="text" name="" id="" />

                            <label htmlFor=''>City:</label>
                            <input type="text" name="" id="" />

                            <label htmlFor=''>Postal code:</label>
                            <input type="text" name="" id="" />

                            <div className="cart-order-btn" onClick={() => orderBtnFunc()}>Order</div>
                        </form>
                    </div>
                ):(
                    <div className="cart-products">
                        <div className="product-list">
                            <p>You'r cart is empty!</p>
                        </div>
                        <form className="cart-adress-form">
                            <div className="order-sum">
                                <p>Order summary</p>
                                <p>{`$${total.toFixed(2)}`}</p>
                            </div>
                        </form>
                    </div>
                )}
                
            </div>
        </div>
    )
}
 
export default Cart;