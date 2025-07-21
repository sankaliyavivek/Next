import React, { useEffect, useRef } from 'react';
import './sectionchoose.css';
import Group4 from '../../assets/Group4.png';
import LayerOne from '../../assets/layer1.png';
import Earth from '../../assets/earth.png';
import Group5 from '../../assets/Group5.png'
import Group6 from '../../assets/Group6.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
function SectionChoose() {

    const leftRef = useRef();
    const centerRef = useRef();
    const rightRef = useRef();
    const chooseOneRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.from(centerRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.from(rightRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.from('.choose_one_part', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: chooseOneRef.current,
                    start: 'top 80%',
                },
            });
        }, [leftRef, centerRef, rightRef, chooseOneRef]);

        return () => ctx.revert();
    }, []);



    return (
        <div className="sectionchoose">
            <div className="container">
                <div className='why'><h1>Why Choose Us?</h1></div>
                <div className="choose">
                    <div className="choose_one" ref={leftRef}>
                        <div className="choose_one_part" ref={chooseOneRef}>
                            <div><img src={Group4} alt="" className='img-one' /></div>
                            <h2>Expert Team</h2>
                            <p>
                                Our team consists of skilled
                                professionals with years of
                                experience in digital marketing.
                            </p>
                        </div>

                        <div className="choose_one_part mt-4">
                            <div>
                                <img src={LayerOne} alt="" className='img-two' />

                            </div>
                            <h2>Personalized Solutions</h2>
                            <p>
                                We don’t believe in a one-size-fits-all approach. Every strategy we create is tailored to your business.
                            </p>
                        </div>
                    </div>

                    <div className="choose_two" ref={centerRef}>
                        <div>
                            <img src={Earth} alt="img" className='img-earth' />
                        </div>
                    </div>

                    <div className="choose_three" ref={rightRef}>
                        <div className="choose_one_part">
                            <div> <img src={Group5} alt="img" className='img-three' /></div>
                            <h2>Transparency</h2>
                            <p>
                                We keep you informed at every step, providing detailed reports and updates on campaign performance.
                            </p>
                        </div>
                        <div className="choose_one_part mt-4">
                            <div><img src={Group6} alt="img" className='img-four' /></div>
                            <h2>Results-Driven</h2>
                            <p>
                                Our goal is to help <br />
                                you achieve tangible growth and success
                                in the digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionChoose;
