import React from 'react';
import PropTypes from 'prop-types';
import Swiper from "./Swiper";
import './index.css'

SwiperContainer.propTypes = {
    autoDuration: PropTypes.number,
    duration: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    imgArr: PropTypes.arrayOf(PropTypes.string)
};

SwiperContainer.defaultProps = {
    autoDuration: 3000,
    duration: 1000,
    width: 600,
    height: 300,
    imgArr: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598271471088&di=f9bf686decb3a5451a5ecf1a817713b9&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg']
}

function SwiperContainer(props) {
    return (
            <div className='swiper-wrapper' style={{
                height: props.height,
                width: props.width
            }}>
                <Swiper imgArr={props.imgArr}/>
            </div>
    );
}

export default SwiperContainer;
