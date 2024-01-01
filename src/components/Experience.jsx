import '../assets/styles/Experience.css'

const Experience = () => {
    return (
        <div className='experience'>
            <p className="experience-title">
                My&nbsp;<span>Experience</span>
            </p>
            <div className="experience-view">
                <div className="experience-card">
                    <div className="exp-card-title">
                        <div className="exp-card-illus"><img src="./images/GS_logo_White.svg"></img></div>
                        <p className="exp-card-name">GSSoC Contributor&apos;23</p>
                        <p className="exp-card-duration">Jun 2023 - Aug 2023</p>
                    </div>
                    <div className="exp-card-description">
                        GSSoC is a 3-month long program where students contribute to open-source projects.
                        I was selected as a contributor for the 2023 edition of GSSoC, and I&apos;m looking forward to it.
                    </div>
                </div>
                <div className="experience-card">
                    <div className="exp-card-title">
                        <div className="exp-card-illus"><i className="fa-solid fa-graduation-cap"></i></div>
                        <p className="exp-card-name">Bachelors of Technology in Information Technology</p>
                        <p className="exp-card-duration">Nov 2022 - Present</p>
                    </div>
                    <div className="exp-card-description">
                        Through my coursework, I&apos;ve gained experience with various programming languages,
                        data structures and algorithms, and software development methodologies, including database concepts,
                        operating systems, and computer networks.

                        I&apos;ve also worked on various projects, including a blogging website, a chat application, and a
                        video streaming application. I&apos;ve also participated in various hackathons and coding competitions.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience