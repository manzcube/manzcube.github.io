import React from 'react';

import './Pages.css';



const About = () => {
  return (
    <div className='page flex-column align-items-center justify-content-start p-5'>
        <h1 className='fw-bold mb-5'>About Me</h1>
        <div className="row w-100 mt-5" style={{height: '100%'}}>
          <div className="col-6 d-flex justify-content-center align-items-start mt-5">
            <div className="card p-4">
              <h5>My Story</h5>
              <br />
              I've been in college studying Maths degree since last year, when I dropped out because I realize how I wasn't gonna like the job opportunities. <br />
              Though I loved Maths, now I love more coding. Just after leave the university, a friend showed me how he was making apps from himself, making requests to a server, saving 
              information on a database, ... I was amazed! <br />
              Since then I haven't had a day without coding. Having a hunger to keep learning and getting better. 
              Started with HTML5, CSS3 and JS. Now making apps with NodeJS, ExpressJS, React, Redux, MongoDB as my mains.
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start align-items-start">
            <img src={require('../img/m.png')} alt="me" className='img-fluid' style={{ maxHeight: '70%' }} />
          </div>
          <div>
            
          </div>
        </div>
                
    </div>
  )
} 

export default About;