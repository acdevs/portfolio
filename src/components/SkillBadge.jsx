import ProtoType from 'prop-types';

const SkillBadge = ({ skill }) => {

    const faIcons = {
        'Git' : 'fa-git-alt',
        'JavaScript' : 'fa-square-js',
        'Node Js' : 'fa-node-js',
        'React' : 'fa-react',
        'CSS' : 'fa-css3-alt',
        'Bootstrap' : 'fa-bootstrap',
        'Sass/Scss' : 'fa-sass',
        'Spring Boot' : 'fa-java',
        'PHP' : 'fa-php',
        'Docker' : 'fa-docker',
        'AWS/Cloud' : 'fa-aws',
    }

    return (
        <div className="skills-badge">
            <p><i className={"fa-brands ".concat(faIcons[skill])}></i></p>
            <p>{ skill }</p>
        </div>
    );
}

SkillBadge.propTypes = {
    skill: ProtoType.string.isRequired,
}

export default SkillBadge;