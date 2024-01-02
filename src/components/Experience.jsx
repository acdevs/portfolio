import '../assets/styles/Experience.css'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <div className='experience'>
            <p className="experience-title">
                My&nbsp;<span>Experience</span>
            </p>
            <div className="experience-view">
                <ExperienceCard
                    name="GSSoC Contributor'23"
                    duration="Jun 2023 - Aug 2023"
                    description="GSSoC is a 3-month long program where students contribute to open-source projects. I was selected as a contributor for the 2023 edition of GSSoC, and I'm looking forward to it."
                    image="./images/GS_logo_White.svg"
                />
                <ExperienceCard
                    name="Bachelors of Technology in Information Technology"
                    duration="Nov 2022 - Present"
                    description="Through my coursework, I've gained experience with various programming languages, data structures and algorithms, and software development methodologies, including database concepts, operating systems, and computer networks. I've also worked on various projects, including a blogging website, a chat application, and a video streaming application. I've also participated in various hackathons and coding competitions."
                    image="./images/college_logo.png"
                />
            </div>
        </div>
    )
}

export default Experience