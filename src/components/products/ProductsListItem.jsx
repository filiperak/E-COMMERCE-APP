import { Link } from 'react-router-dom';

const ProductListItem = ({product}) => {
    return (
        <Link to={`/products/${product.id}`}>
        <div className="product-list-item">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            {/* <p>{product.description}</p> */}
            <p className="p-item-price">{`Price: $${product.price}`}</p>
        </div>
        </Link>
    );
}
 
export default ProductListItem;