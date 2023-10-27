import React from 'react'
import HeaderComponent from '../../components/ui/HeaderComponent'
import '../../App.scss';
import CurriculoEditarComponent from '../../components/estudante/CurriculoEditarComponent';

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