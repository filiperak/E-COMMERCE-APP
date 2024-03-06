// import { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate, Navigate } from "react-router-dom";
// import instance from "../../services/api";
// import Loading from "../laoding/Loading";
// import Error from "../error/Error";
// import './productSingleView.css';
// import { CartContext } from "../../contexts/CartContext";


// const ProductSingleView = () => {

//     const [product,setProduct] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(true);

//     const handleAddBtn = () => {
      
//       // cartDispatch({
//       //   type: 'ADD_TO_CART',
//       //   product: {
//       //     id: product.id,
//       //     title: product.title,
//       //     price: product.price,
//       //   },
//       // });
//     }
//     console.log('Adding to cart:', product,111); 


//     const navigate = useNavigate();
//     const {productId} = useParams();

//     useEffect(() => {
//         instance.get(`/products/${productId}`)
//         .then((res) => {
//             setProduct(res.data)
//         })
//         .catch((er) => {
//             console.error("Error fetching", er)
//             setError(true);

//         })
//         .finally(() => {
//             setLoading(false);
//           });
//     },[])
//     const backBtn = () => {
//         navigate(-1)
//     }
//     return (
//         <>
//           {loading ? (
//             <Loading />
//           ) : error ? (
//             <Error error={error} />
//           ) : (
//             <div className="product-view">
//                 <img src={product.image} alt={product.title} />
//                 <p>{product.title}</p>
//                 <p>{product.description}</p>
//                 <button className="back-btn" onClick={backBtn}>Go Back</button>
//                 <button onClick={handleAddBtn}>add to cart</button>
//             </div>
//           )}
//         </>
//       );
// }
 
// export default ProductSingleView;

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../services/api";
import Loading from "../laoding/Loading";
import Error from "../error/Error";
import { CartContext } from "../../contexts/CartContext";
import './productSingleView.css';

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
                <div className="product-view">
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <button className="back-btn" onClick={backBtn}>Go Back</button>
                    <button onClick={handleAddBtn}>Add to Cart</button>
                </div>
            )}
        </>
    );
}

export default ProductSingleView;
