import { useState } from 'react';
import './viewStyles/ContactUsStyle.css'
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    const [textAreaVal, setTextAreaVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTextAreaVal('');
    };

    const handleTextAreaChange = (e) => {
        setTextAreaVal(e.target.value);
    };

    return (
        <div className='contact-container'>
            <div>
                <span onClick={() => navigate(-1)}>Go Back</span>
                <form className="contact-us-form" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <input type="email" id='inp-mail' placeholder='Enter Email'/>
                    <p>Message</p>
                    <textarea
                        name="text-area"
                        id="text-area"
                        cols="30"
                        rows="10"
                        value={textAreaVal}
                        onChange={handleTextAreaChange} 
                    ></textarea>
                    <p>
                        <input type="submit" value="Send" id='contact-send-btn'/>
                        testtest123
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
