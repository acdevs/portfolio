import '../assets/styles/Skills.css'

const Skills = () => {
    return (
        <div className='skills'>
            <p className="skills-title">
                My&nbsp;<span>Skills</span>
            </p>
            <div className="skills-badges-view">
                <div className="skills-badge">
                    <p><i className="fa-brands fa-git-alt"></i></p>
                    <p>Git</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-square-js"></i></p>
                    <p>JavaScript</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-node-js"></i></p>
                    <p>Node Js</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-react"></i></p>
                    <p>React</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-css3-alt"></i></p>
                    <p>CSS</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-bootstrap"></i></p>
                    <p>Bootstrap</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-sass"></i></p>
                    <p>Sass/Scss</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-java"></i></p>
                    <p>Spring Boot</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-php"></i></p>
                    <p>PHP</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-docker"></i></p>
                    <p>Docker</p>
                </div>
                <div className="skills-badge">
                    <p><i className="fa-brands fa-aws"></i></p>
                    <p>AWS/Cloud</p>
                </div>
            </div>
        </div>
    )
}

export default Skills