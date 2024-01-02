import PropTypes from 'prop-types';

const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card-photo">
                <img src="./images/testimonial01.png"></img>
                <div className="testimonial-card-quote-logo"></div>
            </div>
            <p className="testimonial-card-description">
                {props.description}
            </p>
            <div className="testimonial-card-divider"></div>
            <p className="testimonial-card-name">
                {props.name}
            </p>
            <p className="testimonial-card-position">
                {props.position}
            </p>
        </div>
    )
}

TestimonialCard.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default TestimonialCard;