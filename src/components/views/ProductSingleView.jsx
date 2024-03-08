

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../services/api";
import Loading from "../laoding/Loading";
import Error from "../error/Error";
import { CartContext } from "../../contexts/CartContext";
import './viewStyles/productSingleView.css'

const ProductSingleView = () => {
    const { cartState,cartDispatch } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleAddBtn = () => {
        cartDispatch({
            type: 'ADD_TO_CART',
            product: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            },
        });
        console.log('Adding to cart:', product);
        console.log(cartState);
    }

    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        instance.get(`/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((er) => {
                console.error("Error fetching", er);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    const backBtn = () => {
        navigate(-1);
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
                <>
                <div className="product-view">
                    <img src={product.image} alt={product.title} />
                    <div className="info-container">
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>

                        </div>
                        <p>{product.description}</p>
                        <div className="product-ratitng">{`Rating:${product.rating.rate}/5 based on ${product.rating.count} reviews`}</div> 
                        <div className="add-btn-div">              
                        <button onClick={handleAddBtn} className="add-to-cart-btn">Add to Cart</button>
                        </div> 
        
                    </div>
                </div>
                <button className="product-back-btn" onClick={backBtn}>Back to Products</button>
                </>
            )}
        </>
    );
}

export default ProductSingleView;
