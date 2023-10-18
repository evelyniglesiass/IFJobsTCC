import React from 'react'
import HeaderComponent from '../components/ui/HeaderComponent'
import '../App.scss';
import CurriculoEditarComponent from '../components/estudante/CurriculoEditarComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../components/ui/PesquisaComponent';

const Estudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article><CurriculoEditarComponent/></article>
        </section>
    </>
  )
}

export default Estudante 