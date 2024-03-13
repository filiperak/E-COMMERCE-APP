
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
        <div className='select-sort'>
            <p>Select Category:</p>
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