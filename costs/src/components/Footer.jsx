import React from 'react';

//icons
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

//css
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className='copy'><span>Costs</span> &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
