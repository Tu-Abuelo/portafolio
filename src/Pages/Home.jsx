import './home.css'
import React from 'react'

export default function Home () {
  return (
    <>
      <section className='presentacion'>
        <h1 className='presentacion_titulo'>Hi,<br /> I am<br />Web Developer</h1>
        <button className='presentacion_CV'>Dowload CV</button>
      </section>
      <picture className='presentacion_img-container'><img className='presentacion_img' src='illust_90338952_20220211_135340.jpg' alt='' /></picture>
    </>
  )
}
