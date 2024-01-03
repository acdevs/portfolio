import PropTypes from 'prop-types';

const SocialButton = ({ name, link }) => {
    return (
        <a className="social-button" href={link} data={name} target='_blank' rel='noreferrer'>
            <i className={"fa-brands fa-".concat(name)}></i>
        </a>
    )
}

SocialButton.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialButton;