import { useState } from "react";
const Sort = ({onSortChange}) => {
    const handleSortChange = (selectedSort) => {
        onSortChange(selectedSort)
    }
    return (
        <div>
            <select name="sort-products" onChange={(e)=> handleSortChange(e.target.value)}>
                <option value= 'any'>Any</option>
                <option value="price-ascending">Price ascending</option>
                <option value="price-descending">Price descending</option>
            </select>
        </div>
    );
}
 
export default Sort;