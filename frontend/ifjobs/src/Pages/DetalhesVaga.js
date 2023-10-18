import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../components/empresa/DetalhesVagaComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../components/ui/PesquisaComponent';

const DetalhesVaga = () => {

  return (
    <>
    <nav className='header'><HeaderComponent/></nav>
    <section className='container-perfis'>
      <article className='pesquisa-vagas'><PesquisaComponent/></article>
      <AtalhoPerfilComponent></AtalhoPerfilComponent>
      <article><DetalhesVagaComponent/></article>
    </section>
</>
  )
}

export default DetalhesVaga