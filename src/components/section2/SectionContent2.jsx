import React, { useEffect, useRef } from 'react'
import './sectioncontent2.css'
import GroupOne from '../../assets/Group2.png'
import GroupTwo from '../../assets/Group.png'
import GroupThree from '../../assets/Groupone.png'
import GroupFour from '../../assets/Vector1.png'
import GroupFive from '../../assets/Group1.png'
import GroupSix from '../../assets/Grouptwo.png'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';



gsap.registerPlugin(ScrollTrigger);
const Arry = [
    {
        images: GroupOne,
        head: "Social Media Marketing",
        para: "We create engaging campaigns to connect with your audience on platforms like Facebook, Instagram, LinkedIn."
    },
    {
        images: GroupTwo,
        head: "Search Engine Optimization",
        para: "Our SEO experts optimize your website to improve search engine rankings and drive organic traffic to your site."
    },

    {
        images: GroupThree,
        head: "Pay-Per-Click",
        para: "We manage paid advertising campaigns on Google and social media, ensuring ads reach the right audience at the right time."
    },

    {
        images: GroupFour,
        head: "Google Ads Management",
        para: "Our certified Google Ads specialists design, implement, and optimise high-converting ad campaigns to maximise your budget."
    },
    {
        images: GroupFive,
        head: "Social Media Optimization",
        para: "We enhance your social media profiles to improve visibility and engagement, fostering better connections."
    },
    {
        images: GroupSix,
        head: "Web & Graphic Design",
        para: "Our creative team delivers eye-catching visuals that represent your brand’s identity and stand out in the marketplace."
    },
]


function SectionContent2() {


     const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      gsap.fromTo(box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 70%", // when box top reaches 70% of viewport
            toggleActions: "play reverse play reverse", // play when scrolling down, reverse when scrolling up
          },
        }
      );
    });
  }, []);


    return (
        <div className='container'>

            <div className='mt-4'>
                <div className='content_service'>
                    <div className='content_service_text'><span>Our Service</span></div>
                </div>


                <div className='row mt-2 g-4'>
                    {
                        Arry.map((data,index) => (
                            <div className='col-lg-4' key={data.head}>
                                <div className='content_box' ref={(el) => (boxRefs.current[index] = el)}>
                                    <span>
                                        <img src={data.images} className='img-fluid' alt="" />
                                    </span>

                                    <h1>{data.head}</h1>

                                    <p>
                                        {data.para}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default SectionContent2


