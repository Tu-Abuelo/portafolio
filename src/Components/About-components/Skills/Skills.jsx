import './skills.css'
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGit } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'

export default function Skills () {
  return (
    <>
      <section className='about_skills'>
        <h2 className='about_skills-title'>Habilidades</h2>
        <ul className='about_skills-container'>
          <li className='about_skills-items html'><FaHtml5 /></li>
          <li className='about_skills-items css'><FaCss3 /></li>
          <li className='about_skills-items javascript'><BiLogoJavascript /></li>
          <li className='about_skills-items react'><FaReact /></li>
          <li className='about_skills-items nodejs'><FaNodeJs /></li>
          <li className='about_skills-items git'><FaGit /></li>
        </ul>
      </section>
    </>
  )
}
