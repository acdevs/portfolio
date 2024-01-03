import '../assets/styles/Home.css'
import SocialButton from './SocialButton'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-content">
                <div>
                    <p className='heading'>Howdy, I&apos;m <span className="home-name">Aman Chandra.</span></p>
                    <p className='heading'><span className="home-job-title">Full Stack</span> Developer</p>
                    <p className='heading'>Based in <span className="home-location">India.</span></p>
                    <p className='description'>
                    I am a Full Stack Developer with a passion for building web applications and solving problems. 
                    I have experience working with JavaScript, React, NodeJS, Express, MongoDB, MySQL, HTML, CSS, and more.
                    When I&apos;m not coding, you&apos;ll find me playing video games, reading, or watching movies.
                    </p>
                </div>
            </div>
            <div className="home-graphic"></div>
            <div className="home-socials">
                <SocialButton name='linkedin-in' link='https://linkedin.com/in/amnchndr/'/>
                <SocialButton name='github' link='https://github.com/acdevs/'/>
                <SocialButton name='x-twitter' link='https://twitter.com/amnchndr'/>
                <SocialButton name='instagram' link='https://instagram.com/aman.cha.ndra/'/>
            </div>
            <div className="home-divider">
                <div className="home-divider-line"></div>
            </div>
        </div>
    )
}

export default Home