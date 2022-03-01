import React from "react";
import '../pages/Pages.css';

const ProjectItem = (props) => {   
     
    return (
        <div className="col col-xl-6 col-xxl-4 d-flex justify-content-center">
            <div className="project-card card p-2 m-3">
                <img src={props.picture} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.description}</p>                   
                </div>
                <a className='btn btn-dark text-white shadow-none' href={props.url} target='_blank' rel="noreferrer">More</a>
            </div>
        </div>
    )
}


export default ProjectItem;