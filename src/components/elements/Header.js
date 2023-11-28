import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Menu, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {API_BASEURL} from "../../settings";
const Header = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
      <header className="header">
          <div className="header__logo">
              <img src={Logo} />
          </div>
          <button className="header__collapse-btn" type="button" onClick={() => setIsCollapsed(true)}>
              <Menu />
          </button>
          <div className="header__menu" style={{right: isCollapsed ?  '0px' : '-190px'}}>
            <button className="header__menu__close-btn" style={{display: isCollapsed ?  'block' : 'none'}} type="button" onClick={() => setIsCollapsed(false)}>
              <Close />
            </button>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre-nos">Quem Somos</Link></li>
                <li><a href={API_BASEURL}>Blog</a></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
      </header>
    );
}

export default Header;