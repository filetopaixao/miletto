import React from 'react';
import Product from "../elements/Product";
import Sorvete from '../../assets/images/sorvete.jpg'
import Picole from '../../assets/images/picole.jpg'
import Moreninha from '../../assets/images/moreninha.jpg'
import Empty from '../../assets/images/empty.jpg'
import { useOnScreen } from "../../utils/useOnScreen";


const SectionOurProducts = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-our-products">
            <h1>Nossos Produtos</h1>
            <div className="section-our-products__product" ref={visibilityRef}>
                <Product
                    icon={Sorvete}
                    name="Sorvetes de Massa"
                    isVisible={isVisibleState}
                    delay="0ms"
                />
                <Product
                    icon={Picole}
                    name="Picolés"
                    isVisible={isVisibleState}
                    delay="300ms"
                />
                <Product
                    icon={Moreninha}
                    name="Moreninhas"
                    isVisible={isVisibleState}
                    delay="600ms"
                />
                <Product
                    icon={Empty}
                    name="Açaí"
                    isVisible={isVisibleState}
                    delay="900ms"
                />
                <Product
                    icon={Empty}
                    name="Cremosinho"
                    isVisible={isVisibleState}
                    delay="1200ms"
                />
            </div>
        </section>
    )
}

export default SectionOurProducts;