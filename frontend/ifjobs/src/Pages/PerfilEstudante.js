import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import '../App.scss';
import CurriculoComponent from '../Components/CurriculoComponent';

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