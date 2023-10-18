import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/ui/HeaderComponent';
import EmpresaEditarComponent from '../components/empresa/EmpresaEditarComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../components/ui/PesquisaComponent';

const Empresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article><EmpresaEditarComponent/></article>
        </section>
    </> 
  )
}

export default Empresa 