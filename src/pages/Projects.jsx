import React, { useState } from 'react';
import './Pages.css';
import ProjectItem from '../components/ProjectItem';
const projects_list = require('../seeds/ProjectsList')



const Projects = () => {

  const renderedProjects = projects_list.map((project) => {
      return (
        <ProjectItem 
        name={project.name} 
        description={project.description}
        picture={project.picture}
        url={project.url}
        />
      )
    }
  )


  return (
    <div className='page flex-column align-items-center justify-content-center p-5'>
      <h1 className='fw-bold mb-5'>My Projects</h1>
        <div className="container-fluid d-flex justify-content-center mt-5">
          <div className="row w-75">
            {renderedProjects}
          </div>
        </div>
    </div>
  )
}

export default Projects