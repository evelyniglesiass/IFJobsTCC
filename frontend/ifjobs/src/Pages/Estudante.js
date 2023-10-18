import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import '../App.scss';
import CurriculoComponent from '../components/CurriculoComponent';
import CurriculoEditarComponent from '../components/CurriculoEditarComponent';

const Estudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><CurriculoEditarComponent/></article>
        </section>
    </>
  )
}

export default Estudante 