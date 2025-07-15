import React from 'react';
import './sectioncontact.css';

function SectionContact() {
  return (
    <div className='section_Contact' id='contact'>
      <div className='container'>
        <div className='contact'>
          <div className='contact_form_one'>1</div>

          <div className='contact_form_two'>
            {/* Start Formspree Form */}
            <form
              className='form'
              action="https://formspree.io/f/mblkjjbg"
              method="POST"
            >
              <h1>Contact Us</h1>
              <div className='form_main'>
                <input
                  type="text"
                  name="name"
                  className='first_inp'
                  placeholder='Name*'
                  required
                />

                <div className='form_div'>
                  <input
                    type="text"
                    name="phone"
                    placeholder='Number*'
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder='Email*'
                    required
                  />
                </div>

                <div className='contact_textarea'>
                  <textarea
                    name="message"
                    cols={"100"}
                    rows={8}
                    placeholder='Message*'
                    required
                  ></textarea>
                </div>

                <div className='contact_button'>
                  <button type="submit" className='comman_button_blue'>
                    Enquire Now
                  </button>
                </div>
              </div>
            </form>
            {/* End Formspree Form */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
