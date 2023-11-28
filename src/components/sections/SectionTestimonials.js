import React from 'react';
import Slider from "react-slick";
import people1 from '../../assets/images/people1.jpg';
import people2 from '../../assets/images/people2.jpg';
import people3 from '../../assets/images/people3.jpg';
import quotes from '../../assets/images/quotes.png';
import {useOnScreen} from "../../utils/useOnScreen";
import {Slide} from "@mui/material";

const SectionTestimonials = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const visibilityRef = React.useRef(null);
    const slider = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: width <= 768 ? 1 : 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <section className="section-testimonials">
            <div className="section-testimonials__wrap" ref={visibilityRef}>
                <Slide direction="right" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
                    <h1>Depoimentos dos <span className="primary">nossos clientes</span></h1>
                </Slide>
                <Slide direction="up" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
                    <div>
                        <Slider {...settings} ref={slider}>
                            <div className="section-testimonials__wrap__slide">
                                <div className="section-testimonials__wrap__slide__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et justo tristique vulputate. Vestibulum congue vulputate nibh, eget consectetur nibh euismod at.</p>
                                    <div className="section-testimonials__wrap__slide__content__people">
                                        <img src={people1} />
                                        <div>
                                            <h2>Jeremy Wilson</h2>
                                            <p>Doutor</p>
                                        </div>
                                        <img className="quotes" src={quotes} />
                                    </div>
                                </div>
                            </div>
                            <div className="section-testimonials__wrap__slide">
                                <div className="section-testimonials__wrap__slide__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et justo tristique vulputate. Vestibulum congue vulputate nibh, eget consectetur nibh euismod at.</p>
                                    <div className="section-testimonials__wrap__slide__content__people">
                                        <img src={people3} />
                                        <div>
                                            <h2>Jeremy Wilson</h2>
                                            <p>Doutor</p>
                                        </div>
                                        <img className="quotes" src={quotes} />
                                    </div>
                                </div>
                            </div>
                            <div className="section-testimonials__wrap__slide">
                                <div className="section-testimonials__wrap__slide__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et justo tristique vulputate. Vestibulum congue vulputate nibh, eget consectetur nibh euismod at.</p>
                                    <div className="section-testimonials__wrap__slide__content__people">
                                        <img src={people2} />
                                        <div>
                                            <h2>Jeremy Wilson</h2>
                                            <p>Doutor</p>
                                        </div>
                                        <img className="quotes" src={quotes} />
                                    </div>
                                </div>
                            </div>
                            <div className="section-testimonials__wrap__slide">
                                <div className="section-testimonials__wrap__slide__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et justo tristique vulputate. Vestibulum congue vulputate nibh, eget consectetur nibh euismod at.</p>
                                    <div className="section-testimonials__wrap__slide__content__people">
                                        <img src={people1} />
                                        <div>
                                            <h2>Jeremy Wilson</h2>
                                            <p>Doutor</p>
                                        </div>
                                        <img className="quotes" src={quotes} />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default SectionTestimonials;