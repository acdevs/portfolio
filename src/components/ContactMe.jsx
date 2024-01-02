import '../assets/styles/ContactMe.css'
import ContactForm from './ContactForm'

const ContactMe = () => {
    return (
        <div className='contact'>
            <div className="contact-form">
                <ContactForm />
            </div>
            <div className="contact-content">
                <p className="contact-title">
                    <span>Let&apos;s talk</span> for<br />
                    Something <span>Awesome.</span>
                </p>
                <p className="contact-description">
                    I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </p>

                <div className="contact-info">
                    <p><i className="fa-solid fa-envelope"></i> amanchandra.in@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> 9335273609</p>
                </div>
            </div>
        </div>
    )
}

export default ContactMe