
import ProductListItem from "./ProductsListItem";
import './productList.css';

const ProductsList = ({ products, selectedCategory, selectedSort }) => {
    const filteredProducts = (selectedCategory === 'all' || selectedCategory === undefined) ? products : products.filter(p => p.category === selectedCategory);

    let sortedProducts;

    if (selectedSort === 'any') {
        sortedProducts = filteredProducts;
    } else if (selectedSort === 'price-ascending') {
        sortedProducts = [...filteredProducts].sort((a, b) => a.price > b.price ? 1 : -1);
    } else {
        sortedProducts = [...filteredProducts].sort((a, b) => a.price > b.price ? -1 : 1);
    }

    return (
        <div className="product-list">
            {sortedProducts.map(product => (
                <ProductListItem key={product.id} product={product} className='product-list-item' />
            ))}
        </div>
    );
}

export default ProductsList;
