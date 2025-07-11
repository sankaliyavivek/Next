import React from 'react'
import './sectionforground.css'

function SectionForGround() {
    return (
        <div className='sectionforground'>
            <div className='container'>
                <div className='sectionground'>
                    <div className='ground-one'></div>
                    <div className='ground-two'>
                        <h1>Let's Discuss your Projects</h1>
                        <p>
                            We pride ourselves with our ability to perform and  
                            deliver results. Use the form below to discuss your 
                            project needs with our team, we will get back asap
                        </p>

                        <div style={{textAlign:"center"}}>
                            <button className='comman_button_blue'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionForGround
