import React from 'react'
import HeaderComponent from '../../components/ui/HeaderComponent'
import '../../App.scss';
import CurriculoEditarComponent from '../../components/estudante/CurriculoEditarComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';

const Estudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <div className='atalho-perfil-perfis'><AtalhoPerfilComponent></AtalhoPerfilComponent></div>
          <article><CurriculoEditarComponent/></article>
        </section>
    </>
  )
}

export default Estudante 