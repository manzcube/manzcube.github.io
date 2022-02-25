import React from 'react';
import './Pages.css';



const Projects = (props) => {
  const project_list = ['dgsad', 'tu mamam', 'agfadg', 'klkk', 'marh', 'elfo']

  const renderedProjects = list => {
    list.map(project => {
      return (
        <div className='card'>
          {project}
        </div>
      )
    }
  )  
}


  return (
    <div className='page flex-column align-items-center justify-content-start p-5'>
      <h1 className='fw-bold mb-5'>Projects {props.label}</h1>
      {renderedProjects(project_list)}
      </div>
    )
}

export default Projects