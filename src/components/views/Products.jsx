
import { useEffect, useContext, useState } from "react";
import instance from '../../services/api';
import { ProductContext } from "../../contexts/ProductContext";
import ProductsList from "../products/ProductsList";
import Loading from '../laoding/Loading';
import Error from '../error/Error';
import SelectCategory from "../selectCategory/SelectCategory";
import Sort from "../selectCategory/Sort";
import './viewStyles/productsStyle.css'

const Products = () => {
    const { productState, productDispatch } = useContext(ProductContext);
    const { products, loading, error } = productState;
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedSort, setSelectedSort] = useState('any');

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
    }, [productDispatch]);

    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };
    console.log(products);
    console.log(selectedCategory);
    const handleSortChange = (selectedSort) => {
        setSelectedSort(selectedSort)
    }

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <div className="products-container">
            <div className="select-sort-div">
                <SelectCategory onCategoryChange={handleCategoryChange} />
                <Sort onSortChange={handleSortChange}/>
            </div>

            <ProductsList products={products}
             selectedCategory={selectedCategory}
             selectedSort={selectedSort} 
             className='products-list'/>
        </div>
    );
}

export default Products;
