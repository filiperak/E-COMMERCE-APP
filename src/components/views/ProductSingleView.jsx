import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import Loading from "../laoding/Loading";
import Error from "../error/Error";


const ProductSingleView = () => {
    const [product,setProduct] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const {productId} = useParams();

    useEffect(() => {
        instance.get(`/products/${productId}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((er) => {
            console.error("Error fetching", er)
            setError(true);

        })
        .finally(() => {
            setLoading(false);
          });
    },[])
    const backBtn = () => {
        navigate(-1)
    }
    return (
        <>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error={error} />
          ) : (
            <div>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.description}</p>
                <button className="back-btn" onClick={backBtn}>Go Back</button>
            </div>
          )}
        </>
      );
}
 
export default ProductSingleView;