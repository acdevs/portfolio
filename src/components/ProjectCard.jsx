import ProtoType from 'prop-types';

const ProjectCard = (props) => {

    let {title, subtitle, text, image, link} = props;
    return (
        <div className="projects-view">
            <div className="project-image">
                <img src={image} alt={subtitle} />
            </div>
            <div className="project-description">
                <p className="project-title">{title}</p>
                <p className="project-subtitle">{subtitle}</p>
                <p className="project-text">{text}</p>
                <div className="project-links">
                    <a href={link} target='_blank' rel='noreferrer'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    title: ProtoType.string.isRequired,
    subtitle: ProtoType.string.isRequired,
    text: ProtoType.string.isRequired,
    image: ProtoType.string.isRequired,
    link: ProtoType.string.isRequired
}

export default ProjectCard