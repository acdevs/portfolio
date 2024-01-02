import ProtoType from 'prop-types'

const SkillBadge = ({ skill, progress }) => {
    
    const faIcons = {
        'Git' : 'git-alt',
        'JavaScript' : 'square-js',
        'Node Js' : 'node-js',
        'React' : 'react',
        'CSS' : 'css3-alt',
        'Bootstrap' : 'bootstrap',
        'Sass/Scss' : 'sass',
        'Spring Boot' : 'java',
        'PHP' : 'php',
        'Docker' : 'docker',
        'AWS/Cloud' : 'aws',
    }

    const handleMouseOver = (e) => {
        e.target.style.setProperty('--getProgressValue', progress)
    }

    return (
        <div className="skills-badge" onMouseOver={handleMouseOver}>
            <p>
                <i className={"fa-brands fa-".concat(faIcons[skill])}></i>
                <span className={"progress-bar ".concat(faIcons[skill])}></span>
            </p>
            <p>{ skill }</p>
        </div>
    );
}

SkillBadge.propTypes = {
    skill: ProtoType.string.isRequired,
    progress: ProtoType.string.isRequired,
}

export default SkillBadge;