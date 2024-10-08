import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav () {
  return (
    <>
      <nav className='header_nav'>
        <ul className='header_nav_ul'>
          <li><Link to='/portafolio'>Home</Link></li>
          <li><Link to='/portafolio/about'>Sobre mi</Link></li>
          <li><Link to='/portafolio/projects'>Proyectos</Link></li>
          <li><Link to='/portafolio/contact'>Contacto</Link></li>
        </ul>
      </nav>
    </>
  )
}
