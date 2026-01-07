import React from 'react'
import './icons.css'
import { CssIcon, HtmlIcon, JsIcon, ReactIcon } from '../../assests/icons.jsx'
import tiendaOnline from '../../assests/Tienda-Online.png'

const projects = [
  {
    src: tiendaOnline,
    name: 'Online Shop(Fake)',
    href: 'https://tu-abuelo.github.io/Tienda-Online/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />]
  },
  {
    src: tiendaOnline,
    name: 'Online Shop(Fake)',
    href: 'https://tu-abuelo.github.io/Tienda-Online/',
    tecn: [<HtmlIcon key='html' />, <CssIcon key='css' />, <JsIcon key='js' />, <ReactIcon key='react' />]
  }
]

export default projects
