import React from 'react';
import emailjs from 'emailjs-com';
import './Pages.css';
import Swal from 'sweetalert2';


const ContactMe = () => {

  // Declaring variables for the credentials
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops!, something went wrong'
          })
      });
      e.target.reset()
  };



  return (
    <div className='page'>
      <div className="container-fluid overflow-auto">
        <div className="row">
          <h1 className='fw-bold mb-5 text-center my-5'>Contact Me</h1>
          <form onSubmit={sendEmail} className="p-4 card form">
            <div className="mb-5">
                <label className="form-label" htmlFor="name">Name *</label>
                <input type="text" className="form-control shadow-none border-none fw-bolder" id="name" name="name" required />
            </div>

            <div className="mb-5">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input type="text" className="form-control shadow-none border-none fw-bolder" id="subject" name="subject" />
            </div>

            <div className="mb-5">
                <label className="form-label" htmlFor="email">Email *</label>
                <input type="email" className="form-control shadow-none border-none fw-bolder" id="email" name="email" required />
            </div>

            <div className="mb-5">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea type="text" className="form-control shadow-none border-none fw-bolder" id="message" name="message" required></textarea>
            </div>

            <button className="btn btn-success mb-3">Send Email</button>
          </form> 
        </div>
      </div>        
    </div>
  )
} 

export default ContactMe