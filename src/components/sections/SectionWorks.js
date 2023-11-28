import React from 'react';
import { useOnScreen } from "../../utils/useOnScreen";
import { Zoom } from '@mui/material';

const SectionWorks = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-works">
            <div className="section-works__wrap">
                <Zoom in={isVisibleState}>
                    <div className="section-works__wrap__work">
                        <h1 ref={visibilityRef}>Revenda</h1>
                        <div className="section-works__wrap__work__single work1">
                            <div className="section-works__wrap__work__single__1" />
                        </div>
                        <p>O revendedor Miletto tem um baixo investimento inicial e alta margem de lucro. Enviamos o equipamento em comodato.</p>
                    </div>
                </Zoom>
                <Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '500ms' : '0ms' }}>
                    <div className="section-works__wrap__work">
                        <h1>Eventos</h1>
                        <div className="section-works__wrap__work__single work2">
                            <div className="section-works__wrap__work__single__2" />
                        </div>
                        <p>Não deixe faltar os produtos Miletto na sua festa infantil, 15 anos, casamento, batizado, evento corporativo ou promocional.</p>
                    </div>
                </Zoom>
                <Zoom in={isVisibleState} style={{ transitionDelay: isVisibleState ? '1000ms' : '0ms' }}>
                    <div className="section-works__wrap__work">
                        <h1>Logística</h1>
                        <div className="section-works__wrap__work__single work3">
                            <div className="section-works__wrap__work__single__3" />
                        </div>
                        <p>Com frota própria e modernos caminhões climatizados, a Miletto faz com que seus produtos cheguem ao seu estabelecimento mantendo o mais alto padrão de qualidade.</p>
                    </div>
                </Zoom>
            </div>
        </section>
    )
}

export default SectionWorks;