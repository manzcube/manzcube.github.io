import React from 'react';
import './Pages.css';


const ContactMe = () => {
  return (
    <div className='page flex-column align-items-center justify-content-start p-5' style={{height: '100vh'}}>
        <h1 className='fw-bold mb-5'>Contact Me</h1>
        <form action="/" class="p-4 card" style={{ width: '40%' }}>
            <div class="mb-5">
                <label class="form-label" for="mail">Your Email</label>
                <input type="email" class="form-control shadow-none border-none fw-bolder" id="mail" name="contact[mail]" required />
            </div>

            <div class="mb-5">
                <label class="form-label" for="message">Message</label>
                <textarea type="text" class="form-control shadow-none border-none fw-bolder" id="message" name="contact[message]" required></textarea>
            </div>

            <button class="btn btn-success mb-3">Send Message</button>
        </form> 
    </div>
  )
} 

export default ContactMe