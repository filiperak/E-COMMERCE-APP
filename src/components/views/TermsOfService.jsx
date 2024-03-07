import { useNavigate } from 'react-router-dom';
import './viewStyles/TerrmsOfServiceStyle.css'
const TermsOfService = () => {
    const navigate = useNavigate();
    return (
        <div className="terms-container">
            <div>
                <span onClick={() => navigate(-1)}>Go Back</span>
                <h3>Therms of Service</h3>
                <p>
                Welcome to Amazon.com. Amazon.com Services LLC and/or its affiliates ("Amazon") provide website features and other products and services to you when you visit or shop at Amazon.com, use Amazon products or services, use Amazon applications for mobile, or use software provided by Amazon in connection with any of the foregoing (collectively, "Amazon Services"). By using the Amazon Services, you agree, on behalf of yourself and all members of your household and others who use any Service under your account, to the following conditions.
                </p>
                <h2>Please read these conditions carefully.</h2>
                <p>
                We offer a wide range of Amazon Services, and sometimes additional terms may apply. When you use an Amazon Service (for example, Your Profile, Gift Cards, Amazon Video, Your Media Library, Amazon devices, or Amazon applications) you also will be subject to the guidelines, terms and agreements applicable to that Amazon Service ("Service Terms"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.
                </p>
                <h2>PRIVACY</h2>
                <p>
                Please review our Privacy Notice, which also governs your use of Amazon Services, to understand our practices.
                </p>
                <h2>
                ELECTRONIC COMMUNICATIONS
                </h2>
                <p>
                When you use Amazon Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Amazon Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
                </p>
                <h2>COPYRIGHT</h2>
                <p>
                All content included in or made available through any Amazon Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Amazon or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Amazon Service is the exclusive property of Amazon and protected by U.S. and international copyright laws.
                </p>
            </div>
        </div>
    );
}
 
export default TermsOfService;