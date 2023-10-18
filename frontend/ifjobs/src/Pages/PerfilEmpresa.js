import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/ui/HeaderComponent';
import PerfilEmpresaComponent from '../components/empresa/PerfilEmpresaComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../components/ui/PesquisaComponent';

const PerfilEmpresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article><PerfilEmpresaComponent/></article>
        </section>
    </> 
  )
}

export default PerfilEmpresa 