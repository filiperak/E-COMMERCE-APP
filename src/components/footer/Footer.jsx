import { useNavigate } from "react-router-dom";
import './footerStyle.css'
import { useState } from "react";

const Footer = () => {
    const navigate = useNavigate();
    const [contactIsClicked,setContactIsClicked] = useState(false);
    return (
        <footer className="footer">
            <p>© 2024 Amazon.react.rs</p>
            <div className="links-footer">
                <div onClick={() => navigate('/privacypolicy')}>Privacy Policy</div>
                <div onClick={() => navigate('/termsofservice')}>Terms of Service</div>
                <div onClick={() => navigate('/contactus')}>Contact Us</div>
                
            </div>
        </footer>
    );
}
 
export default Footer;