import React from 'react';
import {useOnScreen} from "../../utils/useOnScreen";
import { GpsFixed, Visibility, Diamond } from '@mui/icons-material';
import Blobz from "../../assets/images/blobz2.png";
import Ele10 from "../../assets/images/ele10.png";
import {Slide} from "@mui/material";
import IcecreamChoco from "../../assets/images/chocolate-ice-cream.png";
import IcecreamChocoSombra from "../../assets/images/chocolate-ice-cream-shadow.png";
import Elemen2 from "../../assets/images/elemen2.png";
import Elemen3 from "../../assets/images/elemen3.png";
import Elemen1 from "../../assets/images/elemen1.png";


const SectionMeta = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-meta">
            <div className="section-meta__wrap">
                <div className="section-meta__wrap__content" ref={visibilityRef}>
                    <Slide direction="up" in={isVisibleState}  mountOnEnter unmountOnExit timeout={2000}>
                        <div className="section-meta__wrap__content__copy">
                            <h1>Meta <span className="primary">&</span> Foco</h1>
                            <p className="meta">Nossa meta é atender todo o estado do Tocantins até dezembro 2025;</p>
                            <div className="section-meta__wrap__content__copy__foco">
                                <div className="section-meta__wrap__content__copy__foco__img">
                                    <div className="section-meta__wrap__content__copy__foco__img__circle">
                                        <GpsFixed />
                                    </div>
                                </div>
                                <div className="section-meta__wrap__content__copy__foco__text">
                                    <h2>Missão</h2>
                                    <p>Fabricar produtos que proporcionem momentos de lazer entre família e amigos, gerando experiências únicas.</p>
                                </div>
                            </div>
                            <div className="section-meta__wrap__content__copy__foco">
                                <div className="section-meta__wrap__content__copy__foco__img">
                                    <div className="section-meta__wrap__content__copy__foco__img__circle">
                                        <Visibility />
                                    </div>
                                </div>
                                <div className="section-meta__wrap__content__copy__foco__text">
                                    <h2>Visão</h2>
                                    <p>Ampliação de novos mercados buscando atender todo o estado do Tocantins, buscando fontes sustentáveis, além de contribuir com a renda direta e indiretamente.</p>
                                </div>
                            </div>
                            <div className="section-meta__wrap__content__copy__foco">
                                <div className="section-meta__wrap__content__copy__foco__img">
                                    <div className="section-meta__wrap__content__copy__foco__img__circle">
                                        <Diamond />
                                    </div>
                                </div>
                                <div className="section-meta__wrap__content__copy__foco__text">
                                    <h2>Valores</h2>
                                    <p>Ética, honestidade, transparência.
                                        Busca da melhoria constante;</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <div className="section-meta__wrap__content__image">
                            <div className="section-meta__wrap__content__image__img">
                                <img src={Blobz} className="section-meta__wrap__content__image__img__blobz" />
                                <img src={Ele10} className="section-meta__wrap__content__image__img__ele10" />
                                <Slide direction="up" in={isVisibleState}  mountOnEnter unmountOnExit timeout={1000}>
                                    <img src={IcecreamChoco} className="section-meta__wrap__content__image__img__aline" />
                                </Slide>
                                <img src={IcecreamChocoSombra} className="section-meta__wrap__content__image__img__aline-sombra" />
                                <img src={Elemen2} className="section-meta__wrap__content__image__img__elemen5"/>
                                <img src={Elemen3} className="section-meta__wrap__content__image__img__elemen6"/>
                                <img src={Elemen1} className="section-meta__wrap__content__image__img__blob12"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMeta;