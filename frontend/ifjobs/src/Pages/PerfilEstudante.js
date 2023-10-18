import React from 'react'
import HeaderComponent from '../components/ui/HeaderComponent'
import '../App.scss';
import CurriculoComponent from '../components/estudante/CurriculoComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../components/ui/PesquisaComponent';

const PerfilEstudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article><CurriculoComponent/></article>
        </section>
    </>
  )
}

export default PerfilEstudante 