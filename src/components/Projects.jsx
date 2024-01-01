import '../assets/styles/Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <p className="projects-title">
                My&nbsp;<span>Projects</span>
            </p>
            <div className="projects-view">
                <div className="project-image">
                    <img src="./images/project02.png" alt="Blogging Website" />
                </div>
                <div className="project-description">
                    <p className="project-title">01</p>
                    <p className="project-subtitle">Blogging Website</p>
                    <p className="project-text">
                        A blogging website built using React, NodeJS, Express, and MongoDB. 
                        Users can create an account, post blogs, and comment on other users&apos; blogs.
                    </p>
                    <div className="project-links">
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="projects-view">
                <div className="project-image">
                <img src="./images/project01.png" alt="Blogging Website" />
                </div>
                <div className="project-description">
                    <p className="project-title">02</p>
                    <p className="project-subtitle">Blogging Website</p>
                    <p className="project-text">
                        A blogging website built using React, NodeJS, Express, and MongoDB. 
                        Users can create an account, post blogs, and comment on other users&apos; blogs.
                    </p>
                    <div className="project-links">
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="projects-view">
                <div className="project-image">
                <img src="./images/project02.png" alt="Blogging Website" />
                </div>
                <div className="project-description">
                    <p className="project-title">03</p>
                    <p className="project-subtitle">Blogging Website</p>
                    <p className="project-text">
                        A blogging website built using React, NodeJS, Express, and MongoDB. 
                        Users can create an account, post blogs, and comment on other users&apos; blogs.
                    </p>
                    <div className="project-links">
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects