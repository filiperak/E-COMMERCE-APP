// import axios from "axios";
// import instance from "../../services/api";
// import { useEffect, useState } from "react";
// import ProductsList from "../products/ProductsList";
// import { useContext } from "react";
// import { ProductContext } from "../../contexts/ProductContext";

// const SelectCaregory = () => {
//     const {productState,productDispatch} = useContext(ProductContext);
//     const {products} = productState;
//     const [category,setCategory] = useState([])
//     useEffect(() => {
//         instance
//         .get("/products/categories")
//         .then((res) => setCategory(res.data))
//         .catch((error) => {
//           console.log(error);
//         })
//     },[category])
 
//     return (
//         <div>
//             <select name="select-category">
//                 <option value={category}>all products</option>
//                 {category.map(elem =>{
//                 return <option value={elem} key={elem}>{elem}</option>
//             })}
//             </select>
//             <ProductsList products={products} category={category}/>
           
//         </div>
//     );
// }
 
// export default SelectCaregory;
import { useEffect, useState } from "react";
import instance from "../../services/api";

const SelectCategory = ({ onCategoryChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        instance
            .get("/products/categories")
            .then((res) => setCategories(res.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleCategoryChange = (selectedCategory) => {
        onCategoryChange(selectedCategory);
    };

    return (
        <div>
            <select name="select-category" onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="all">All Products</option>
                {categories.map((elem) => (
                    <option value={elem} key={elem}>{elem}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectCategory;
