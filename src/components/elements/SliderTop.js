import React from 'react';
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.png';
import Wave from '../../assets/images/wave.png';

const SliderTop = () => {
    const slider = React.useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return(
        <div className="slider-top">
            <div className="slider-top__wrap">
                <button className="slider-top__wrap__btn-prev" onClick={() => slider?.current?.slickPrev()}><ArrowBackIos /></button>
                <Slider {...settings} ref={slider}>
                    <div className="slider-top__wrap__slide">
                        <img src={Slide2} />
                    </div>
                    <div className="slider-top__wrap__slide">
                        <img src={Slide1} />
                    </div>
                    <div className="slider-top__wrap__slide">
                        <img src={Slide3} />
                    </div>
                </Slider>
                <button className="slider-top__wrap__btn-next" onClick={() => slider?.current?.slickNext()}><ArrowForwardIos /></button>
            </div>
        </div>
    );
}

export default SliderTop;