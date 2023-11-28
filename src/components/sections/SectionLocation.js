import React from 'react';
import { Room, ArrowRightAlt } from '@mui/icons-material';
import MilettoLocation from '../../assets/images/miletto-location.png';
import {useOnScreen} from "../../utils/useOnScreen";
import {Slide} from "@mui/material";

const SectionLocation = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-location">
            <div className="section-location__wrap">
                <h1>Localização da <span className="primary">nossa Loja</span></h1>
                <div className="section-location__wrap__content" ref={visibilityRef}>
                    <Slide direction="right" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
                        <div className="section-location__wrap__content__info">
                            <div className="section-location__wrap__content__info__copy">
                                <div className="section-location__wrap__content__info__copy__text">
                                    <div className="underline">
                                        <Room />
                                        <h2>Avenida Palmas, Quadra 35, 8 - Santa Bárbara, Palmas - TO</h2>
                                    </div>
                                    <h2>Horários de Funcionamento:</h2>
                                    <p>Segunda - Sexta</p>
                                    <p className="hour">09:00 - 17:00</p>
                                    <p>Sábado</p>
                                    <p className="underline hour">08:00 - 12:00</p>
                                    <a
                                        href="https://www.google.com/maps/place/Miletto+Sorvetes/@-10.3373099,-48.3020852,17z/data=!3m1!4b1!4m6!3m5!1s0x933b3be763d15b09:0xadffadc68f9bbdc9!8m2!3d-10.3373152!4d-48.2995103!16s%2Fg%2F11fnrv837r?entry=ttu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ArrowRightAlt /> Ver Mapa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction="left" in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
                        <div className="section-location__wrap__content__image">
                            <div>
                                <img src={MilettoLocation} />
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default SectionLocation;