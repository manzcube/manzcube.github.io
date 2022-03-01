import React from 'react';
import './Pages.css';
import ProjectItem from '../components/ProjectItem';
const projects_list = require('../seeds/ProjectsList')



const Projects = () => {

  const renderedProjects = projects_list.map((project, index) => {
      return (
        <ProjectItem 
        key={index}
        name={project.name} 
        description={project.description}
        picture={project.picture}
        url={project.url}
        />
      )
    }
  )


  return (
    <div className='page'>
      <div className="container-fluid overflow-auto">
        <div className="row text-center">
          <h1 className='fw-bold mb-5 my-5'>My Projects</h1>      
            {renderedProjects}
          <a 
          href="https://www.github.com/manzcube" 
          target='_blank' 
          rel='noreferrer' 
          className='d-flex align-items-center my-5 row'>
            Check out the rest on my GitHub
            <i className="bi bi-github m-2"></i>                
          </a>
        </div>  
      </div>  
    </div>
  )
}

export default Projects