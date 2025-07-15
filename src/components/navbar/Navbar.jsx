import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import BlackLogo from '../../assets/bluelogo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      ></div>

      {/* Navbar */}
      <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Mobile Menu */}
        <div className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          <span className="close-btn" onClick={toggleMenu}>&times;</span>

          <div className="mobile-logo">
            <img src={Logo} alt="Logo" />
          </div>

          <ul className="list">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Our Services</Link></li>
            <li><Link to="/why" onClick={toggleMenu}>Why Choose Us?</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><button className="comman_button_white menu-btn">Get Quote</button></li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </>
  );
}

export default Navbar;
