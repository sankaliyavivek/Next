import React from 'react'
import './sectioncontact.css';

function SectionContact() {
  return (
    <div className='section_Contact'>   
     <div className='container'>
       <div className='contact'>
         <div className='contact_form_one'> 1</div>

        <div className='contact_form_two'>

                <div className='form'>
                    <h1>Contact Us</h1>
                    <div className='form_main'>

                        <input type="text" className='first_inp' placeholder='Name*'/>
                      <div className='form_div'>
                          <input type="text" name="" id=""  placeholder='Number*' />
                          <input type="text" name="" id=""  placeholder='Email*' />
                      </div>

                      <div className='contact_textarea'>
                      <textarea name="" id="" cols={"100"}  rows={8} placeholder='Message*'></textarea>
                      </div>

                      <div className='contact_button'>
                        <button className='comman_button_blue'>Enquire Now</button>
                      </div>
                    </div>
                </div>

        </div>
       </div>
     </div>
    </div>
  )
}

export default SectionContact
