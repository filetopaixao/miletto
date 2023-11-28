import React from 'react';
import { Zoom } from '@mui/material';

const Product = ({icon, name, isVisible, delay}) => {
    return (
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? delay : '0ms' }}>
            <div className="product">
                <div className="product__card">
                   <div className="product__card__content" style={{background: `url('${icon}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} />
                </div>
                <h5>{name}</h5>
            </div>
        </Zoom>
    )
}

export default Product;