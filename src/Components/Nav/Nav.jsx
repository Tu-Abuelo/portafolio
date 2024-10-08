import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav () {
  return (
    <>
      <nav className='header_nav'>
        <ul className='header_nav_ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>Sobre mi</Link></li>
          <li><Link to='/projects'>Proyectos</Link></li>
          <li><Link to='/contact'>Contacto</Link></li>
        </ul>
      </nav>
    </>
  )
}
