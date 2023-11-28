import React from 'react';
import Ele10 from '../../assets/images/ele10.png';
import Blob100 from '../../assets/images/blob100-1024x683.png';
import Aline from '../../assets/images/aline.png';
import AlineSombra from '../../assets/images/aline-fundo.png';
import Elemen5 from '../../assets/images/elemen5.png';
import Elemen6 from '../../assets/images/elemen6.png';
import Blob12 from '../../assets/images/blob12-1.png';
import { Slide } from '@mui/material';
import {Link} from "react-router-dom";
import { useOnScreen } from '../../utils/useOnScreen';


const SectionAboutUs = ({ sectionAboutUsRef }) => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <div className="about-us" ref={sectionAboutUsRef}>
            <div className="about-us__wrap">
                <div className="about-us__wrap__image">
                    <img src={Blob100} className="about-us__wrap__image__blob100"/>
                    <img src={Ele10} className="about-us__wrap__image__ele10" ref={visibilityRef}/>
                    <Slide direction="up" in={isVisibleState}  mountOnEnter unmountOnExit timeout={1000}>
                            <img src={Aline} className="about-us__wrap__image__aline"/>
                    </Slide>
                    <img src={AlineSombra} className="about-us__wrap__image__aline-sombra"/>
                    <img src={Elemen5} className="about-us__wrap__image__elemen5"/>
                    <img src={Elemen6} className="about-us__wrap__image__elemen6"/>
                    <img src={Blob12} className="about-us__wrap__image__blob12"/>
                </div>
                <Slide direction="up" in={isVisibleState}  mountOnEnter unmountOnExit timeout={2000}>
                    <div className="about-us__wrap__copy">
                        <h1>Sobre Nós</h1>
                        <p>Somos uma empresa genuinamente tocantinense, com fabricação própria, somos industria e comercio. Temos como propósito trazer sabor, qualidade e momentos de prazer para nossos clientes. Atuamos há mais de 8 anos no mercado, atendendo a capital Palmas/TO, além de cidades vizinhas, num raio de 250 km. Nossos canais de venda são: ponto de venda em comércios, venda direta ao consumidor final e por meio de ambulantes (carrinhos).</p>
                        <Link to="/sobre-nos">Ler mais</Link>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default SectionAboutUs;