import './contactForm.css'
import React from 'react'
import { useForm } from 'react-hook-form'

const validationEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/

export default function ContactForm () {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = (data) => {
    document.querySelector('#contact-form').submit()
  }

  return (

    <form
      id='contact-form'
      action='https://formspree.io/f/xovqayag' method='POST' className='contact_form'
      onSubmit={handleSubmit(onSubmit)}
      target='_blank'
    >
      <input
        className='contact_form-name' placeholder='Tu Nombre' autoFocus='none'
        type='text' name='name'
        {...register('name', { required: true, maxLength: 30 })}
      />
      {errors.name?.type === 'required' && (
        <small className='error-mesage'>Este campo es requerido</small>
      )}

      <input
        className='contact_form-email' placeholder='Tu Email'
        type='emai' name='email'
        {...register('email', { required: true, maxLength: 30, pattern: validationEmail })}
      />
      {errors.email?.type === 'required' && (
        <small className='error-mesage'>Este campo es requerido</small>
      )}
      {errors.email?.type === 'pattern' && (
        <small className='error-mesage'>Inserte un email valido</small>
      )}

      <textarea
        className='contact_form-message' placeholder='Tu Mensaje' rows={5}
        name='mesage'
        {...register('mesage', { required: true })}
      />
      {errors.mesage?.type === 'required' && (
        <small className='error-mesage'>Este campo es requerido</small>
      )}

      <button className='contact_form-submit'>Enviar</button>

      <input type='hidden' name='_captcha' value='false' />
    </form>

  )
}
