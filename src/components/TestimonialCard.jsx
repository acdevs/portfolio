import PropTypes from 'prop-types';

const TestimonialCard = (props) => {

    let {description, name, position, image} = props;

    return (
        <div className="testimonial-card">
            <div className="testimonial-card-photo">
                <img src={image}></img>
                <div className="testimonial-card-quote-logo"></div>
            </div>
            <p className="testimonial-card-description">{description}</p>
            <div className="testimonial-card-divider"></div>
            <p className="testimonial-card-name">{name}</p>
            <p className="testimonial-card-position">{position}</p>
        </div>
    )
}

TestimonialCard.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default TestimonialCard;