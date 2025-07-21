import React, { useEffect, useRef } from 'react'
import './sectionapproch.css'
import Object_img from '../../assets/Objects.png'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionApproch() {

    const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -300, autoAlpha:0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay:0.3,
           autoAlpha: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 70%', // 30% from bottom = top 70%
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 300,    autoAlpha: 0,},
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay:0.3,
         autoAlpha: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);



  return (
    <div className='sectionapproch'>
      <div className='container'>
        <div className='approch'>
          <div className='approch_one' ref={leftRef}>
            <img src={Object_img} alt="image" className='img-fluid' width={"100%"} height={"100%"} />
          </div>

          <div className='approch_two' ref={rightRef}>
            <h1>Our Approach</h1>
            <p>Every business is unique, which is why we take the time to understand your specific goals and challenges. Our data-driven strategies are customized to meet your needs, ensuring that you get the most value from your marketing efforts. Whether you're looking to increase website traffic, generate leads, or build a strong brand presence, we're here to help you succeed.</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SectionApproch
