import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/company'>company</Link></li>
          <li><Link to='/contact'>contact</Link></li>
          <li><Link to='/new-project'>new project</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
