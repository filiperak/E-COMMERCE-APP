
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../../services/api";
import './viewStyles/homeStyle.css';
import Error from "../error/Error";
import Loading from "../laoding/Loading";
import ProductListItem from "../products/ProductsListItem";

const Home = () => {
  const [randproduct, setRandProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    instance
      .get('/products')
      .then((res) => {
        const shuffledProducts = res.data.sort(() => Math.random() - 0.5);
        const selectedProducts = shuffledProducts.slice(0, 8);
        setRandProduct(selectedProducts)
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
      <div className="home-page-container">
        <div className="home-wrapper">
          <Link to="/products">
            <button>All products</button>
          </Link>
            <div className="first-home-product">
              {randproduct.slice(0,1).map(elem => {
                <p>{elem.title}</p>
              })}

            </div>
            <p>This week's special offer</p>
            <div className="rand-product-container">
                {randproduct.map((product) => (
                  <Link to={`/products/${product.id}`}>
                  <div className="home-rand-product">
                      <img src={product.image} alt={product.title} />
                      <p>{product.title.slice(0,10)}</p>
                      <p className="p-item-price">{`Price: $${product.price}`}</p>
                      <p>
                      {/* <Link to={`/products/${product.id}`}>View</Link> */}
                      </p>
                      
                  </div>
                  </Link>
                ))}
            </div>
        </div>
      </div>
    );
};

export default Home;
