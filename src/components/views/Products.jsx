import { useEffect,useContext } from "react";
import instance  from '../../services/api';
import { ProductContext } from "../../contexts/ProductContext";
import ProductsList from "../products/ProductsList";
import Loading from '../laoding/Loading';
import Error from '../error/Error';

const Products = () => {
    const {productState,productDispatch} = useContext(ProductContext);
    const {products,loading,error} = productState;

    useEffect(() => {
        productDispatch({type:"FETCH_PRODUCTS_REQUEST"})
        instance
        .get('/products')
        .then((res => {
            productDispatch({
                type:"FETCH_PRODUCTS_SUCCESS",
                payload: res.data
            });
            console.log(res.data);
        }))
        .catch((error) => {
            productDispatch({
                type:"FETCH_PRODUCTS_FAILURE",
                payload:error.response
            })
        })
    },[]);
    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    return (
        <>
        <div>product view</div>
        <ProductsList products={products}/>
        </>
    );
}
 
export default Products;