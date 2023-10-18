import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/ui/HeaderComponent'
import EmpresasComponent from '../components/empresa/EmpresasComponent'
import PesquisaComponent from '../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../components/ui/AtalhoPerfilComponent';

const Empresas = () => {
  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article className='div-empresa'><EmpresasComponent/></article>
        </section>
    </div>
  )
}

export default Empresas