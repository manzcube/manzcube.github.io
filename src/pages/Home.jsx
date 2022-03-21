import React from 'react';
import './Pages.css';
import TechSkills from '../components/TechSkills';

const Home = () => {
  return (
    <div className='page'>
      <div className="container-fluid overflow-scroll">
        <div className="row w-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">
            <span className="animate__animated animate__bounceInLeft d-flex justify-content-end px-4">
              <div>
                <h3>Hi!, I'm</h3>
                <h1 className='fw-bold'>Marc Alzamora</h1>
                <h2>FullStack Developer</h2>
                <a href="../files/Resume-Marc-Alzamora.pdf" download className='btn btn-light my-2'>Download Resume</a>
                <br />

                <a href="https://www.linkedin.com/in/marc-alzamora" target='_blank' rel='noreferrer'><i className="bi bi-linkedin m-2"></i></a>
                <a href="https://www.github.com/manzcube" target='_blank' rel='noreferrer'><i className="bi bi-github m-2"></i></a>
                
              </div>              
              <img src={require('../img/picme.webp')} alt='pic' className='img-fluid' style={{ maxWidth: '300px', maxHeight: '300px' }} />
            </span>
          </div>

          <div className="col-lg-6 flex-column p-5 animate__animated animate__bounceInRight">
            <h2 className='text-center'>Tech Skills</h2>
            <TechSkills />  
          </div>     
        </div>
      </div>
    </div>
  )
}



export default Home;



// import FullStack from 'Developer';

// class Marc extends Person {
//     constructor(props) {
//         super(props);
//         this._age = 20;
//         this._stack = 'MERN';
//         this._hobbies = 'rubiks cube' && 'padel';
//     }
// }



// console.log(FullStack, Marc)