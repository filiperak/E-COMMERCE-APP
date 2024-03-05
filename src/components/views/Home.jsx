import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            this is home
            <Link to={'/products'}>
            <button>all products</button>
            </Link>
        </div>
    );
}
 
export default Home;