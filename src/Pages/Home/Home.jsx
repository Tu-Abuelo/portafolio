import './home.css'
import React from 'react'

export default function Home () {
  return (
    <>
      <main className='main-home'>
        <section className='presentacion'>
          <h1 className='presentacion_titulo'>Hi,<br /> I am<br />Web Developer</h1>
          <button className='presentacion_CV'>Descargar CV</button>
        </section>
        <div className='presentacion_img-container'><img className='presentacion_img' src='../../../public/programando.jpg' alt='' /></div>
      </main>
    </>
  )
}
