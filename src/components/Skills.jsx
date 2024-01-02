import '../assets/styles/Skills.css'
import SkillBadge from './SkillBadge'

const Skills = () => {
    return (
        <div className='skills'>
            <p className="skills-title">
                My&nbsp;<span>Skills</span>
            </p>
            <div className="skills-badges-view">
                <SkillBadge skill="Git" progress='50' />
                <SkillBadge skill="JavaScript" progress='40' />
                <SkillBadge skill="Node Js" progress='60' />
                <SkillBadge skill="React" progress='25' />
                <SkillBadge skill="CSS" progress='80' />
                <SkillBadge skill="Bootstrap" progress='30' />
                <SkillBadge skill="Sass/Scss" progress='20' />
                <SkillBadge skill="Spring Boot" progress='10' />
                <SkillBadge skill="PHP" progress='30' />
                <SkillBadge skill="Docker" progress='20' />
                <SkillBadge skill="AWS/Cloud" progress='20' />
            </div>
        </div>
    )
}

export default Skills