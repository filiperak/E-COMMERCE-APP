
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
        setRandProduct(res.data.slice(4, 8));
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
    <>
      <p>This is home</p>
      <Link to="/products">
        <button>All products</button>
      </Link>
      <div className="randproduct-list">
        {randproduct.map((product) => (
          <ProductListItem key={product.id} product={product} className='product-list-item' />
        ))}
      </div>
    </>
  );
};

export default Home;
