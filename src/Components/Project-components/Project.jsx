import React from 'react'
import './project.css'
import projects from './data'

export default function Project () {
  return (
    <>
      {projects.map(p => (
        <section key={p.name} className='projects'>
          <div className='projects_img-container'>
            <div className='projects_tecnologis'>
              {p.tecn}
            </div>
            <a target='blank' href={p.href}>
              <img className='projects_img' src={p.src} alt='Project' />
            </a>
          </div>
          <div className='projects_description'><a target='blank' href={p.href}>{p.name} </a></div>
        </section>
      )
      )}
    </>

  )
}
