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
                subtitle="Social Media Hub"
                text="A social media hub built using Vanilla. Explore the links to connect with me on various platforms. Whether you're interested in my professional endeavors, projects, or simply want to say hello, this hub is designed to facilitate easy and meaningful connections."
                image="./images/project01.png"
                link="https://acdevs.github.io/"
            />
            <ProjectCard
                title="02"
                subtitle="Blogging Website"
                text="A blogging website built using EJS, NodeJS, Express, and MongoDB. 
                Users can create account, view others&apos; blog posts, write their own blogs, and even edit them."
                image="./images/project02.png"
                link="https://whimsy-blogs.cyclic.app/"
                />
            <ProjectCard
                title="03"
                subtitle="Weather App"
                text="A weather app built using Vanilla, HTML & CSS. Users can search for a city and get the current weather conditions.
                The app uses the OpenWeatherMap API to fetch weather data. The app also displays appropriate weather icons."
                image="./images/project01.png"
                link="https://acdevs.github.io/weather"
            />
        </div>
    )
}

export default Projects