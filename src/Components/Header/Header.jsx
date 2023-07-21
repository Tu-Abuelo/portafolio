import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='header'>
      <nav className='header_nav'>
        <ul className='header_nav_ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About me</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>

  )
}
