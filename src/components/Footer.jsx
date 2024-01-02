import '../assets/styles/Footer.css'
import BrandIcon from './BrandIcon'

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
            <BrandIcon name='Personal'/>
            <p className="footer-description">
                <p>&copy; {currentYear} Aman Chandra.</p>
                <p>Made with <i className="fa-solid fa-heart"></i></p>
            </p>
        </div>
    )
}

export default Footer
