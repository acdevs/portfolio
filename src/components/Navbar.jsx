import '../assets/styles/Navbar.css'
import BrandIcon from './BrandIcon'
import NavLinks from './NavLinks'
import ResumeButton from './ResumeButton'

const Navbar = () => {
    return (
        <div className='navbar'>
            <BrandIcon name='Personal'/>
            <NavLinks />
            <ResumeButton />
        </div>
    )
}

export default Navbar
