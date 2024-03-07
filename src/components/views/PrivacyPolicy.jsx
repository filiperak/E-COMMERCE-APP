import { useNavigate } from 'react-router-dom';
import './viewStyles/PrivacyPolicyStyle.css'

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="privacy-container">
            <div>
            <span onClick={() => navigate(-1)}>Go Back</span>
            <h3>Privacy Policy</h3>
            <h2>Amazon.com Privacy Notice</h2>
            <p>
                We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how Amazon.com and its affiliates (collectively "Amazon") collect and process your personal information through Amazon websites, devices, products, services, online and physical stores, and applications that reference this Privacy Notice (together "Amazon Services"). By using Amazon Services, you are consenting to the practices described in this Privacy Notice.
            </p>
            <h2>What Personal Information About Customers Does Amazon Collect?</h2>
            <p>
                We collect your personal information in order to provide and continually improve our products and services.

                Here are the types of personal information we collect:

                Information You Give Us: We receive and store any information you provide in relation to Amazon Services. Click here to see examples of what we collect. You can choose not to provide certain information, but then you might not be able to take advantage of many of our Amazon Services.
                Automatic Information: We automatically collect and store certain types of information about your use of Amazon Services, including information about your interaction with products, content, and services available through Amazon Services. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your web browser or device accesses Amazon Services and other content served by or on behalf of Amazon on other websites. Our physical stores may use cameras, computer vision, sensors, and other technology to gather information about your activity in the store, such as the products and services you interact with. Click here to see examples of what we collect.
                Information from Other Sources: We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily. Click here to see additional examples of the information we receive.
            </p>
            <h2>For What Purposes Does Amazon Use Your Personal Information?</h2>
            <p>
                We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include:

                Purchase and delivery of products and services. We use your personal information to take and handle orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.
                Provide, troubleshoot, and improve Amazon Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Amazon Services.
                Recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.
                Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services. For more information about Alexa voice services , click here.
                Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.
                Communicate with you. We use your personal information to communicate with you in relation to Amazon Services via different channels (e.g., by phone, email, chat).
                Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads. To learn more, please read our Interest-Based Ads notice.
                Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers, Amazon, and others. We may also use scoring methods to assess and manage credit risks.
            </p>
            </div>
        </div>
    );
}
 
export default PrivacyPolicy;