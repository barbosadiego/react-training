import React from 'react';
import { Link } from 'react-router-dom';

// css
import './Navbar.scss';

// icons
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/"> <BiCameraMovie /> MoviesLib</Link>
      </h2>
      <form>
        <input type="text" placeholder='Busque um filme' />
        <button className='btn' type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
