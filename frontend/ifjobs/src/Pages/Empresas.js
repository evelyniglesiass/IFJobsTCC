import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/HeaderComponent'
import EmpresasComponent from '../components/EmpresasComponent'
import PesquisaComponent from '../components/PesquisaComponent';

const Empresas = () => {
  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'><PesquisaComponent/></article>
          <article className='div-empresa'><EmpresasComponent/></article>
        </section>
    </div>
  )
}

export default Empresas