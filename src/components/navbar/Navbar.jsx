import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import BlackLogo from '../../assets/bluelogo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };




  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={scrolled ? BlackLogo : Logo} alt="Logo" height="100%" />
      </div>

      <div className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/why">Why Choose Us?</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><button className="comman_button_white">Get Quote</button></li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
