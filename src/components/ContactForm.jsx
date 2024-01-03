import SocialButton from './SocialButton'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const [buttonText, setButtonText] = useState('Get In Touch');
    const [buttonState, setButtonState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            e.target[0].classList.add('error');
        }
        if (email === '') {
            e.target[1].classList.add('error');
        }
        if (message === '') {
            e.target[3].classList.add('error');
        }
        if (name === '' || email === '' || message === '') {
            return;
        }

        setButtonText('Sending...');
        setTimeout(() => {
            setButtonState(true);
            setButtonText('You Got This');
            setName('');
            setEmail('');
            setWebsite('');
            setMessage('');
        }, 2000);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
        e.target.classList.remove('error');
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        e.target.classList.remove('error');
    }
    
    const handleChangeWebsite = (e) => {
        setWebsite(e.target.value);
        e.target.classList.remove('error');
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
        e.target.classList.remove('error');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Name*' value={name} onChange={handleChangeName} />
            <input type="email" placeholder='Email*' value={email} onChange={handleChangeEmail} />
            <input type="text" placeholder='Your website (if exists)' value={website} onChange={handleChangeWebsite} />
            <textarea placeholder="How can I help?*" value={message} onChange={handleChangeMessage} rows="5"></textarea>
            <div className="contact-form-buttons">
                <button type="submit" className='button-rectangle' disabled={buttonState}>{buttonText}</button>
                <SocialButton name='linkedin-in' link='https://linkedin.com/in/amnchndr' />
                <SocialButton name='x-twitter' link='https://twitter.com/amnchndr' />
                <SocialButton name='whatsapp' link="https://wa.me/919335273609?text=I'm%20interested%20for'" />
            </div>
        </form>
    )
}

export default ContactForm