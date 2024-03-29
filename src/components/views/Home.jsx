
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../../services/api";
import './viewStyles/homeStyle.css';
import Error from "../error/Error";
import Loading from "../laoding/Loading";
import StarRatings from "react-star-ratings";

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
          <Link to="/products" className="home-all-products">
            <button >All products</button>
          </Link>
            <div className="first-home-product-container">
              {randproduct.slice(0,1).map(elem => ( 
                <div className="first-home-product">
                  <div className="first-home-title">
                    <p className="top-pick">Today's Top Pick</p>
                    <h1>New Product</h1>
                    <p className="home-title-desc">{elem.description}</p>
                    <div className="home-star-rating">
                      <StarRatings 
                      rating={elem.rating.rate}
                      starRatedColor='orange'
                      starDimension="20px"
                      starSpacing="5px"
                      />
                     <p>{`based on ${elem.rating.count} reviews`}</p>

                    </div>
                    <Link to={`/products/${elem.id}`} className="home-buy-now">
                      Buy now
                    </Link>
                  </div>
                  <div className="first-home-img">
                    <img src={elem.image} alt={elem.title}/>
                    <h4>{elem.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="week-offer">This week's special offer</h4>
            <div className="rand-product-container">
                {randproduct.map((product) => (
                  <Link to={`/products/${product.id}`}>
                  <div className="home-rand-product">
                      <img src={product.image} alt={product.title} />
                      <p>{product.title.slice(0,10)}</p>
                      <p className="p-item-price">{`Price: $${product.price}`}</p>
                  </div>
                  </Link>
                ))}
            </div>
        </div>
      </div>
    );
};

export default Home;
