import '../assets/styles/ContactMe.css'

const ContactMe = () => {
    return (
        <div className='contact'>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Your website (if exists)' />
                    <textarea placeholder="How can I help?*"></textarea>
                    <div className="contact-form-buttons">
                        <button type="submit">Get In Touch</button>
                        <a className="social-box"><i className="fa-brands fa-whatsapp"></i></a>
                        <a className="social-box"><i className="fa-brands fa-x-twitter"></i></a>
                        <a className="social-box"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </form>
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
                    <p className="contact-info-email"><i className="fa-solid fa-envelope"></i> amanchandra.in@gmail.com</p>
                    <p className="contact-info-phone"><i className="fa-solid fa-phone"></i> 9335273609</p>
                </div>
            </div>
        </div>
    )
}

export default ContactMe