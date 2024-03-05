import { useNavigate } from "react-router-dom";
import './navStyle.css'
import {ReactComponent as Logo} from '../../assets/logo-amazon.svg'
import {ReactComponent as Cart} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <Logo 
            className="nav-logo"
            onClick={() => navigate('/')}/>
            <Cart 
            className="nav-cart"
            onClick={() => navigate('/cart')}/>
        </nav>
    );
}
 
export default Navbar;