import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='brand-icon'>
                <span className="material-symbols-outlined">circle</span>
                <span>Personal</span>
            </div>
            <div className='nav-links'>
                <a href="#">About Me</a>
                <a href="#">Skills</a>
                <a href="#">Project</a>
                <a href="#">Contact Me</a>
            </div>
            <div className='resume-button'>
                <a href="https://drive.google.com/file/d/1Onfy3K67sckpMh5FxhgZ83g2kiDxeh_F/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a>
            </div>
        </div>
    )
}

export default Navbar
