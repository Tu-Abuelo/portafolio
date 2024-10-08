import React from 'react'
import './icons.css'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'

const projects = [
  {
    src: 'Sin título.png',
    name: 'Giphy Clone',
    href: 'https://tu-abuelo.github.io/buscador-de-gifs/',
    tecn: [<FaHtml5 key='html' className='icons html' />, <FaCss3Alt key='css' className='icons css' />, <BiLogoJavascript key='javascript' className='icons javascript' />, <FaReact key='react' className='icons react' />]
  },
  {
    src: 'Sin título.png',
    name: 'Giphy Clones',
    href: 'https://tu-abuelo.github.io/buscador-de-gifs/',
    tecn: [<FaHtml5 key='html' className='icons html' />, <FaCss3Alt key='css' className='icons css' />, <BiLogoJavascript key='javascript' className='icons javascript' />, <FaReact key='react' className='icons react' />]
  }
]

export default projects
