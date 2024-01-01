import '../assets/styles/AboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className="aboutme-graphic" alt="Designed by Freepik"></div>
            <div className="aboutme-content">
                <p className="aboutme-title">
                    About&nbsp;<span>Me</span>
                </p>
                <div className="aboutme-description">
                    <p className="aboutme-text">
                    I am a Full Stack Developer with a passion for building web applications and solving problems. 
                    I have experience working with JavaScript, React, NodeJS, Express, MongoDB, MySQL, HTML, CSS, and more.
                    When I&apos;m not coding, you&apos;ll find me playing video games, reading, or watching movies.
                    </p>

                    <p className="aboutme-text">
                    I am a student and aspiring software developer with a passion for DevOps and Cloud technologies. 
                    I am constantly driven to create innovative solutions and leverage the power of automation and 
                    scalability in software development.
                    </p>

                    <p className="aboutme-text"> 
                    My educational background includes studying computer science and gaining hands-on experience through various coding projects. 
                    I am always eager to learn and stay up-to-date with the latest trends and advancements in the software industry.
                    I am excited about the opportunities that lie ahead in my software development journey and look forward to contributing to 
                    impactful projects that make a difference.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe