import ProductListItem from "./ProductsListItem";
import './productList.css'

const ProductsList = ({products}) => {
    return (
        <div className="product-list">
            {products.map(product => {
               return <ProductListItem key={product.id} product={product} className='product-list-item'/>
            })}
        </div>
    );
}
 
export default ProductsList;