import React from 'react';
import Logo from '../../assets/images/logo.png';
import Wave from '../../assets/images/wave-footer.png';
import { Instagram, Facebook, Room, Phone, Email, WatchLater } from '@mui/icons-material';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__wave" src={Wave} />
            <div className="footer__wrap">
                <div className="footer__wrap__content">
                    <div className="footer__wrap__content__column um">
                        <img src={Logo} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <div className="footer__wrap__content__column__social">
                            <a href="#">
                                <Instagram />
                            </a>
                            <a href="#">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                    <div className="footer__wrap__content__column">
                        <h2>Nossa Loja</h2>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/sobre-nos">Quem Somos</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                    <div className="footer__wrap__content__column">
                        <h2>Contato</h2>
                        <div className="footer__wrap__content__column__contact">
                            <Room />
                            <span>Avenida Palmas, Quadra 35, 8 - Santa Bárbara, Palmas - TO</span>
                        </div>
                        <div className="footer__wrap__content__column__contact">
                            <Phone />
                            <span>(63) 99999-9999</span>
                        </div>
                        <div className="footer__wrap__content__column__contact">
                            <Email />
                            <span>miletto@email.com</span>
                        </div>
                        <div className="footer__wrap__content__column__contact">
                            <WatchLater />
                            <div>
                                <p>Seg - Sex 08:00 - 18:00</p>
                                <p>Sáb 08:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;