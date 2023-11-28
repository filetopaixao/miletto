import React from 'react';
import Header from "../elements/Header";
import SliderTop from "../elements/SliderTop";
import { Fade } from '@mui/material';
import Wave from "../../assets/images/wave.png";


const SectionTop = () => {
    const [animationStart, setAnimationStart] = React.useState(false);

    React.useEffect(() => {
        setAnimationStart(true);
    }, []);

    return (
        <div className="section-top">
            <Header />
            <img className="section-top__wave-overlay" src={Wave} />
            <Fade in={animationStart} timeout={4000}>
                <div>
                    <SliderTop />
                </div>
            </Fade>
        </div>
    )
}

export default SectionTop;