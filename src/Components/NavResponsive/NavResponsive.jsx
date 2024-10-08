import React from 'react'
import { Link } from 'react-router-dom'
import './navResponsive.css'

export default function NavResponsive () {
  return (
    <>
      <nav className='header_nav-responsive'>
        <ul className='header_nav_ul-responsive'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>Sobre mi</Link></li>
          <li><Link to='/projects'>Proyectos</Link></li>
          <li><Link to='/contact'>Contacto</Link></li>
        </ul>
      </nav>
    </>
  )
}
