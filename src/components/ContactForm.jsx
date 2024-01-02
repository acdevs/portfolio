import SocialButton from './SocialButton'

const ContactForm = () => {
    return (
        <form>
            <input type="text" placeholder='Your Name*' required/>
            <input type="email" placeholder='Email*' required/>
            <input type="text" placeholder='Your website (if exists)' />
            <textarea placeholder="How can I help?*" required></textarea>
            <div className="contact-form-buttons">
                <button type="submit" className='button-rectangle'>Get In Touch</button>
                <SocialButton name='linkedin-in' link='https://linkedin.com/in/amnchndr' />
                <SocialButton name='x-twitter' link='https://twitter.com/amnchndr' />
                <SocialButton name='whatsapp' link="https://wa.me/919335273609?text=I'm%20interested%20for'" />
            </div>
        </form>
    )
}

export default ContactForm