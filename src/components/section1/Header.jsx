import React, { useEffect, useRef } from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'
import gsap from 'gsap';



function Header() {

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.9,
      ease: 'power3.out',
      stagger:1.5
    });

  }, [])

  return (
    <div className='section1'>
      <Navbar></Navbar>

      <div className='header'>

        <div className='header_main'>

          <div className='header_content'></div>

          <div className='header_content_one' ref={headerRef}>

            <h1>
              Welcome to Next Horizone –
              Your Trusted Digital Media & Marketing Partner
            </h1>

            <p>
              we are dedicated to helping businesses of all sizes grow and thrive in the ever-
              evolving digital landscape. As a full-service digital marketing agency, we specialize
              in crafting personalized strategies that deliver real, measurable results. Our team of
              experts is passionate about leveraging the power of the internet to drive your
              business forward.
            </p>

            <div className='header_button'>
              <button className='comman_button_blue'>Get Quote</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Header

