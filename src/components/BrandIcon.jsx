
import PropTypes from 'prop-types';

const BrandIcon = ({ name }) => {
    return (
        <div className='brand-icon'>
                <span className="material-symbols-outlined">circle</span>
                <span>{ name }</span>
        </div>
    );
}

BrandIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default BrandIcon;