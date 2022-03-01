import React from 'react';

import './Pages.css';



const About = () => {
  return (
    <div className='page'>
      <div className="container-fluid overflow-auto">
        <div className="row">
          <h1 className='fw-bold text-center my-5'>About Me</h1>
          <div className="col-lg-6 d-flex justify-content-center align-items-center my-5">
            <div className="card p-4 w-75">
              <h5>My Story</h5>
              <br />
              I've been in college studying Maths degree since last year, when I dropped out because I realized that I don't like the job opportunities I would have. <br />
              Though I loved Maths, now I love more coding. Just after leave the university, a friend showed me how he was making apps from himself, making requests to a server, saving 
              information on a database, ... I was amazed! <br />
              Since then I haven't had a day without coding. Having a hunger to keep learning and getting better. 
              Started with HTML5, CSS3 and JS. Now making apps with NodeJS, ExpressJS, React, Redux, MongoDB as my mains.
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-start my-5">
            <img src={require('../img/ee.png')} alt="me" className='img-fluid' style={{ maxHeight: '70ch' }} />
          </div>
        </div>
        <div className="row">
        <h1 className='fw-bold text-center my-5'>Hobbies</h1>
        reading & cuebs
        </div>
      </div> 
    </div>
  )
} 

export default About;