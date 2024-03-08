 
import ProductListItem from "./ProductsListItem";
import './productList.css';

const ProductsList = ({ products, selectedCategory }) => {
    const filteredProducts = selectedCategory === 'all' ? (products): (products.filter(p => p.category == (selectedCategory)));

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <ProductListItem key={product.id} product={product} className='product-list-item' />
            ))}
        </div>
    );
}

export default ProductsList;
