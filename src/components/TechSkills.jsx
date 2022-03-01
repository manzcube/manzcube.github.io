import React from "react";
import './TechSkills.css';
 

const TechSkills = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <i className="devicon-javascript-plain colored mx-4" />
                <div className="progressBar">
                    <div className="jsProgress progressValue"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <i className="devicon-react-original colored mx-4" />
                <div className="progressBar">
                    <div className="reactProgress progressValue"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <i className="devicon-mongodb-plain colored mx-4" />
                <div className="progressBar">
                    <div className="mongodbProgress progressValue"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <i className="devicon-nodejs-plain colored mx-4" />
                <div className="progressBar">
                    <div className="nodejsProgress progressValue"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <i className="devicon-express-original colored mx-4" />
                <div className="progressBar">
                    <div className="expressProgress progressValue"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} className='mx-4' style={{ height: '4ch' }} alt='bootstrap' />
                <div className="progressBar">
                    <div className="bootsProgress progressValue" />
                </div>
            </div></>
    )
}


export default TechSkills;