import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import Loading from "../laoding/Loading";

const ProductSingleView = () => {
    const [product,setProduct] = useState(null);
    const navigate = useNavigate();
    const {productId} = useParams();
    console.log(productId);
    useEffect(() => {
        instance.get(`/products/${productId}`).then((res) => setProduct(res.data))
        .catch((error) => console.error("Error fetching", error));
    },[])

    return (
        <div>
            singleView
            {product? (
        <>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.description}</p>
        </>
        ) : (
            <Loading/>
        )}
            </div>
        );
}
 
export default ProductSingleView;