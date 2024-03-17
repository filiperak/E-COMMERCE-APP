import './viewStyles/ContactUsStyle.css'


const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='contact-container'>
        <form className="contact-us-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input type="email" id='inp-mail' placeholder='Enter Email'/>
            <p>Message</p>
            <textarea name="text-area" id="text-area" cols="30" rows="10"></textarea>
            <p>
            <input type="submit" value="Send" />
            </p>
        </form>
        </div>
    );
}
 
export default ContactUs;