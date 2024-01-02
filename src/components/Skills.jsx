import '../assets/styles/Skills.css'
import SkillBadge from './SkillBadge'

const Skills = () => {
    return (
        <div className='skills'>
            <p className="skills-title">
                My&nbsp;<span>Skills</span>
            </p>
            <div className="skills-badges-view">
                <SkillBadge skill="Git" />
                <SkillBadge skill="JavaScript" />
                <SkillBadge skill="Node Js" />
                <SkillBadge skill="React" />
                <SkillBadge skill="CSS" />
                <SkillBadge skill="Bootstrap" />
                <SkillBadge skill="Sass/Scss" />
                <SkillBadge skill="Spring Boot" />
                <SkillBadge skill="PHP" />
                <SkillBadge skill="Docker" />
                <SkillBadge skill="AWS/Cloud" />
            </div>
        </div>
    )
}

export default Skills