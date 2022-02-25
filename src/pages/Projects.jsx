import React from 'react';
import './Pages.css';
import Project from '../components/Project';



const Projects = ({ label }) => {
  const project_list = [{name: 'dgsad'}, {name: 'tu mamam'}, {name: 'agfadg'}, {name: 'klkk'}, {name: 'marh'}, {name: 'elfo'}]

  const renderedProjects = project_list.map((project) => {
      return (
        <div className='card'>
          <Project title={project.name} />
        </div>
      )
    }
  )


  return (
    <div className='page flex-column align-items-center justify-content-start p-5'>
      <h1 className='fw-bold mb-5'>Projects {label}</h1>
        {renderedProjects}
    </div>
  )
}

export default Projects