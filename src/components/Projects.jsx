import '../assets/styles/Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='projects'>
            <p className="projects-title">
                My&nbsp;<span>Projects</span>
            </p>
            <ProjectCard
                title="01"
                subtitle="Blogging Website"
                text="A blogging website built using React, NodeJS, Express, and MongoDB. 
                Users can create account,post blogs, and comment on other users&apos; blogs."
                image="./images/project02.png"
            />
            <ProjectCard
                title="01"
                subtitle="Blogging Website"
                text="A blogging website built using React, NodeJS, Express, and MongoDB. 
                Users can create account,post blogs, and comment on other users&apos; blogs."
                image="./images/project01.png"
            />
            <ProjectCard
                title="01"
                subtitle="Blogging Website"
                text="A blogging website built using React, NodeJS, Express, and MongoDB. 
                Users can create account,post blogs, and comment on other users&apos; blogs."
                image="./images/project02.png"
            />
        </div>
    )
}

export default Projects