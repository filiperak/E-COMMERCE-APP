import { useNavigate } from "react-router-dom";
import './navStyle.css'
import {ReactComponent as Logo} from '../../assets/logo-amazon.svg'
import {ReactComponent as Cart} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo className="nav-logo"/>
            <Cart className="nav-cart"/>
        </nav>
    );
}
 
export default Navbar;