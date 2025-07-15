import React from 'react'
import './footer.css'
import LogoImage from '../../assets/bluelogo.png';
import Phoneimage from '../../assets/phone.png';
import Smsimage from '../../assets/sms.png';
import Facebookimage from '../../assets/Vector2.png';
import instaimage from '../../assets/insta.svg';
import Linkdineimage from '../../assets/linkdin.png';





function Footer() {
    return (
        <div className='section_footer'>


            <div className='container-fluid'>
                <div className='section_footer_div'>
                    <div className='section_footer_one'>
                        <div className='footer_logo'>
                            <img src={LogoImage} alt="" />
                        </div>
                    </div>

                    <div className='section_footer_one'>
                        <div className='footer_service'>
                            <h1>
                                Services
                            </h1>

                            <div>
                                <p>  Web Design</p>
                                <p>  Social Media Marketing(SMM)</p>
                                <p> Search Engine Optimization(SEO)</p>
                                <p>  Pay-Per-Click (PPC)</p>
                                <p>  Google Ads Management</p>
                                <p>  Social Media Optimization (SMO)</p>
                                <p>Web & Graphic Design</p>
                            </div>
                        </div>
                    </div>


                    <div className='section_footer_one'>
                        <div className='footer_contact'>
                            <h1>Contact us</h1>
                            <div className=''>
                                <div className='foot_email'>
                                    <span><img src={Smsimage} alt="" /></span>
                                    <p>Inquiry.nexthorizone@gmail.com</p>
                                </div>

                                <div className='foot_email'>
                                    <span><img src={Phoneimage} alt="" /></span>
                                    <p>+91 84015 85691, +91 84697 83007, +91 99135 39147</p>
                                </div>

                                <div className='social_icon'>
                                    <span>
                                        <img src={Facebookimage} alt="" />
                                    </span>

                                    <span>
                                        <img src={instaimage} alt="" />
                                    </span>

                                    <span>
                                        <img src={Linkdineimage} alt="" />
                                    </span>
                                </div>
                                <h5>
                                    A/S-13 Jain Shashan Nagar Part-1, Near Jain Temple Umiya Vijay's Lane, opposite Jhansi Rani Statue, Gujarat 380015
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
