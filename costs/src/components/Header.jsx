import React from 'react';
import { Link } from 'react-router-dom';

// css
import './Header.css';

// components
import logo from '../img/costs_logo.png'

const Header = () => {
  return (
    <header className='navbar'>
      <nav className='container '>
        <Link to='/'>
          <img src={logo} alt="Costs" />
        </Link>
        <ul className='list'>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/projects'>projetos</Link></li>
          <li><Link to='/company'>empresa</Link></li>
          <li><Link to='/contact'>contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
