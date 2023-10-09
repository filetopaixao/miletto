import React from 'react';
import Header from "../elements/Header";
import SliderTop from "../elements/SliderTop";
import { Fade } from '@mui/material';


const SectionTop = () => {
    const [animationStart, setAnimationStart] = React.useState(false);

    React.useEffect(() => {
        setAnimationStart(true);
    }, []);

    return (
        <div>
            <Header />
            <Fade in={animationStart} timeout={4000}>
                <div>
                    <SliderTop />
                </div>
            </Fade>
        </div>
    )
}

export default SectionTop;