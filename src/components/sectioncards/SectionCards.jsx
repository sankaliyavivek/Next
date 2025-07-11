import React from 'react'
import './sectioncards.css'
import GroupOne from '../../assets/Group2.png'
import GroupTwo from '../../assets/Group.png'
import GroupThree from '../../assets/Groupone.png'
import GroupFour from '../../assets/Vector1.png'
import GroupFive from '../../assets/Group1.png'
import GroupSix from '../../assets/Grouptwo.png'

function SectionCards() {
    return (
        <div className='sectioncards'>
            <div className='container'>
                <div className='section_card_head'>
                    <h1>Comprehensive Digital Marketing Services</h1>
                </div>

                <div className='section_card_boxs row gy-4'>

                    <div className='section_card_one col-lg-4'>
                        <div className='degital_card'>
                            <div>
                                <span>
                                    <img src={GroupOne} alt="img" className='card_img_one' />
                                </span>
                                <h3>
                                    Social Media Marketing
                                </h3>

                                <p>
                                    Social media platforms are where
                                    your audience lives, interacts, and
                                    makes decisions. Our Social Media
                                    Marketing services focus on
                                    creating compelling content that
                                    sparks engagement and drives
                                    conversions. We develop tailored
                                    strategies for platforms like
                                    Facebook, Instagram, LinkedIn,
                                    Twitter, and more, ensuring your
                                    brand stays relevant and visible.
                                </p>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b>  Content Creation:</b> Customized posts, images, and videos that reflect your brand's voice.
                                    </p>
                                </div>


                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b> Ad Campaigns:</b> Targeted advertisements to reach the right audience and maximize ROI.
                                    </p>
                                </div>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b> Community Management :</b> Engaging with your audience through comments, messages, and interactions.
                                    </p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <button className='comman_button_blue'>Enquire Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='section_card_one col-lg-4'>
                        <div className='degital_card'>
                            <div>
                                <span>
                                    <img src={GroupTwo} alt="img" className='card_img_two' />
                                </span>

                                <h3>
                                    Social Media Marketing
                                </h3>

                                <p>
                                    Ranking high on search engines like Google is crucial for online success. Our **SEO services** ensure that your website becomes visible to users actively searching for your products or services. We perform detailed keyword research, technical optimization, and content enhancement to improve your rankingsand organic traffic.
                                </p>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b> On-Page SEO:</b> Optimization of website elements like content, tags, and images for better rankings.
                                    </p>
                                </div>


                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b>Off-Page SEO:</b> Building authoritative backlinks to improve your website's credibility and visibility.
                                    </p>
                                </div>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b>Technical SEO :</b> Ensuring your website is structured correctly, improving load times, and mobile-friendliness.
                                    </p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <button className='comman_button_blue'>Enquire Now</button>
                            </div>
                        </div>

                    </div>

                    <div className='section_card_one col-lg-4'>
                        <div className='degital_card'>
                            <div>
                                <span>
                                    <img src={GroupThree} alt="img" className='card_img_three' />
                                </span>

                                <h3>
                                    Pay-Per-Click Advertising
                                </h3>

                                <p>
                                    Need immediate visibility? Our Pay-Per-Click (PPC) campaigns are designed to get your brand in front of the right people, at the right time. We manage ads on Google, Bing, and social platforms to ensure maximum efficiency and return on your investment.
                                </p>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b> Keyword Research:</b> Identifying profitable keywords for your business.
                                    </p>
                                </div>


                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b>Ad Creation:</b> Crafting compelling, high-converting ads that drive traffic and conversions.
                                    </p>
                                </div>

                                <div className='card_para'>
                                    <span><i className="fa-solid fa-caret-right"></i></span>
                                    <p>
                                        <b>  Campaign Optimization:</b> Continuous analysis and adjustment to ensure your ads perform at their best.
                                    </p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <button className='comman_button_blue'>Enquire Now</button>
                            </div>
                        </div>
                    </div>



                    <div className='section_card_one col-lg-4'>
                       <div className='degital_card'>
                         <div>
                            <span>
                                <img src={GroupFour} alt="img" className='card_img_four' />
                            </span>

                            <h3>
                                Google Ads Management
                            </h3>

                            <p>
                                Our Google Ads experts are here to help you get the most out of your advertising budget. Whether you’re looking to increase brand awareness, generate leads, or drive sales, we manage every aspect of your Google Ads campaign.
                            </p>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b>  Search Ads:</b> Display ads in Google’s search results based on relevant keywords.
                                </p>
                            </div>


                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b>Display Ads:</b> Reach potential customers through visual ads across Google's network of sites.
                                </p>
                            </div>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b>   Remarketing :</b> Re-engage visitors who previously interacted with your website.
                                </p>
                            </div>
                        </div>

                        <div className='my-4'>
                            <button className='comman_button_blue'>Enquire Now</button>
                        </div>
                       </div>
                    </div>


                    <div className='section_card_one col-lg-4'>
                        <div className='degital_card'>
                            <div>
                            <span>
                                <img src={GroupFive} alt="img" className='card_img_five' />
                            </span>


                            <h3>
                                Social Media Optimization
                            </h3>

                            <p>
                                An optimized social media presence is key to standing out from your competitors. We ensure that all your profiles on platforms like Facebook, Instagram, LinkedIn, and others are complete, professional, and aligned with your brand identity. Social Media Optimization (SMO) goes beyond just posting content; we make sure your profiles are discoverable, engaging, and constantly growing.
                            </p>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b>  Profile Optimization :</b> Enhancing your social profiles to improve visibility and searchability.
                                </p>
                            </div>


                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b> Strategic Posting: </b>Timing and frequency adjustments to ensure maximum engagement.
                                </p>
                            </div>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b>Hashtag Strategy:</b> Identifying the best hashtags to increase the reach of your posts.
                                </p>
                            </div>
                        </div>

                        <div className='my-4'>
                            <button className='comman_button_blue'>Enquire Now</button>
                        </div>
                        </div>
                    </div>

                    <div className='section_card_one col-lg-4'>
                       <div className="degital_card">
                         <div>
                            <span>
                                <img src={GroupSix} alt="img" className='card_img_six' />
                            </span>


                            <h3>
                                Web & Graphic Design
                            </h3>

                            <p>
                                Your brand’s visual identity is essential to how your audience perceives you. Our talented graphic designers create visually appealing and professional graphics that align with your brand message. Whether you need a new **logo design**, banners, or marketing materials, our team delivers quality designs that leave a lasting impression.
                            </p>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b> Web Design:</b> Crafting a unique logo & web presence that represents your brand and values.
                                </p>
                            </div>


                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b> Marketing Materials : </b>Designing brochures, flyers, and other promotional content.
                                </p>
                            </div>

                            <div className='card_para'>
                                <span><i className="fa-solid fa-caret-right"></i></span>
                                <p>
                                    <b> Social Media Graphics : </b>Creating eye-catching images for posts, stories, and ads.
                                </p>
                            </div>
                        </div>
                        
                        <div className='my-4'>
                            <button className='comman_button_blue'>Enquire Now</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCards
