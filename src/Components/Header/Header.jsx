import React, { useState } from 'react'
import './header.css'
import { FaGithub, FaLinkedin, FaAlignJustify } from 'react-icons/fa'
import Nav from '../Nav/Nav'
import NavResponsive from '../NavResponsive/NavResponsive'

export default function Header () {
  const [header, setHeader] = useState(false)

  return (
    <header className='header'>
      <div className='header_redes'>
        <a className='link-icons' target='blank' href='https://github.com/Tu-Abuelo/'><FaGithub className='icons-header git-hub' /></a>
        <a className='link-icons' target='blank' href=''><FaLinkedin className='icons-header linkedin' /></a>
      </div>
      <div className=' header_nav-container'>
        {window.innerWidth > 800
          ? <Nav />
          : <button className='header_nav_menu' onClick={() => { setHeader(!header) }}><FaAlignJustify className='header_nav_menu-icon' /></button>}
        {header ? <NavResponsive /> : ''}
      </div>

    </header>

  )
}
