import '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p className="footer-title">
                <span className="material-symbols-outlined">circle</span>
                <span>Personal</span>
            </p>
            <p className="footer-description">
                <p>&copy; 2024 Aman Chandra. All rights reserved.</p>
                <p>Made with <i className="fa-solid fa-heart"></i></p>
            </p>
        </div>
    )
}

export default Footer
