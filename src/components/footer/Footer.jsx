import { useNavigate } from "react-router-dom";

import './footerStyle.css'
const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <p>"© 2024 Amazon.rs</p>
            <div onClick={() => navigate('/privacypolicy')}>test</div>
        </footer>
    );
}
 
export default Footer;