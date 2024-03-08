
import { useEffect, useContext, useState } from "react";
import instance from '../../services/api';
import { ProductContext } from "../../contexts/ProductContext";
import ProductsList from "../products/ProductsList";
import Loading from '../laoding/Loading';
import Error from '../error/Error';
import SelectCategory from "../selectCategory/SelectCategory";

const Products = () => {
    const { productState, productDispatch } = useContext(ProductContext);
    const { products, loading, error } = productState;
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        productDispatch({ type: "FETCH_PRODUCTS_REQUEST" });
        instance
            .get('/products')
            .then((res) => {
                productDispatch({
                    type: "FETCH_PRODUCTS_SUCCESS",
                    payload: res.data
                });
                console.log(res.data);
            })
            .catch((error) => {
                productDispatch({
                    type: "FETCH_PRODUCTS_FAILURE",
                    payload: error.response
                });
            });
    }, []);

    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };
    console.log(products);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <>
            <div>Product View</div>
            <SelectCategory onCategoryChange={handleCategoryChange} />
            <ProductsList products={products} selectedCategory={selectedCategory} />
        </>
    );
}

export default Products;
