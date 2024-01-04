const NavLinks = () => {
  
  const scrollPageToView = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target);
    location.scrollIntoView({behavior: 'smooth'});
  }

  const toggleNavLink = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-links-active');
  }

  /*  */

  return (
    <div className='nav-links'>
        <div className="circle-slide-btn" onClick={toggleNavLink}></div>
        <a href=".aboutme" onClick={scrollPageToView}>About Me</a>
        <a href=".skills" onClick={scrollPageToView}>Skills</a>
        <a href=".projects" onClick={scrollPageToView}>Projects</a>
        <a href=".contact" onClick={scrollPageToView}>Contact Me</a>
    </div>
  );
}

export default NavLinks;