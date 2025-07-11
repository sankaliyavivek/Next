import React from 'react';
import './sectionchoose.css';
import Group4 from '../../assets/Group4.png';
import LayerOne from '../../assets/layer1.png';
import Earth from '../../assets/earth.png';
import Group5 from '../../assets/Group5.png'
import Group6 from '../../assets/Group6.png'

function SectionChoose() {
    return (
        <div className="sectionchoose">
            <div className="container">
                <div className='why'><h1>Why Choose Us?</h1></div>
                <div className="choose">
                    <div className="choose_one">
                        <div className="choose_one_part">
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

                    <div className="choose_two">
                        <div>
                            <img src={Earth} alt="img" className='img-earth' />
                        </div>
                    </div>

                    <div className="choose_three">
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
