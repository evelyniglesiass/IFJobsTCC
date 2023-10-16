import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import '../App.scss';
import CurriculoComponent from '../components/CurriculoComponent';

const PerfilEstudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><CurriculoComponent/></article>
        </section>
    </>
  )
}

export default PerfilEstudante 