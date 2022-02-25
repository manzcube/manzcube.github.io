import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className='page'>
      <div className="row w-100">
        <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">
          <span class="animate__animated animate__bounceInLeft d-flex justify-content-end px-4">
            <div>
              <h3>Hi!, I'm</h3>
              <h1 className='fw-bold'>Marc Alzamora</h1>
              <h2>FullStack Developer</h2>
            </div>              
            <img src={require('../img/picme.webp')} alt='pic' className='img-fluid' style={{ maxWidth: '300px', maxHeight: '300px' }} />
          </span>
        </div>

        <div className="col-lg-6 d-flex justify-content-center align-items-center p-5 animate__animated animate__bounceInRight">
          <span className='d-flex justify-content-start'>            
            <div className="card p-5 rounded-3 d-flex justify-content-start">
              <span className='my-1'>1 &nbsp; {'  class Marc extends Person {'}</span> 
              <span className='my-1'>2 &nbsp; &nbsp; {'constructor(props) {'}</span> 
              <span className='my-1'>3 &nbsp; &nbsp; &nbsp; {'super(props);'}</span> 
              <span className='my-1'>4 &nbsp; &nbsp; &nbsp; {'this.age = 20'}</span> 
              <span className='my-1'>5 &nbsp; &nbsp; &nbsp; {'this.stack = MERN'}</span> 
              <span className='my-1'>6 &nbsp; &nbsp; &nbsp; {'this.hobbies = rubiks cube && padel'}</span> 
              <span className='my-1'>7 &nbsp; &nbsp; {'}'}</span> 
              <span className='my-1'>8 &nbsp; {'}'}</span>   
            </div>
          </span>
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