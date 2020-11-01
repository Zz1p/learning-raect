import React from 'react';
import PropTypes from 'prop-types'

Swiper.propTypes = {
    imgArr: PropTypes.arrayOf(PropTypes.string).isRequired,

}

function Swiper(props) {
    console.log(props)
    return (
            <div></div>
    );
}

export default Swiper;
