import ProtoType from 'prop-types';

const ExperienceCard = (props) => {

    let {name, duration, description, image} = props;

    return (
        <div className="experience-card">
            <div className="exp-card-title">
                <div className="exp-card-illus"><img src={image}></img></div>
                <p className="exp-card-name">{name}</p>
                <p className="exp-card-duration">{duration}</p>
            </div>
            <div className="exp-card-description">{description}</div>
        </div>
    )
}

ExperienceCard.propTypes = {
    name: ProtoType.string.isRequired,
    duration: ProtoType.string.isRequired,
    description: ProtoType.string.isRequired,
    image: ProtoType.string.isRequired
}

export default ExperienceCard