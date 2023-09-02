import React from 'react'
import '../App.scss';
import HeaderComponent from '../Components/HeaderComponent'
import EmpresasComponent from '../Components/EmpresasComponent'
import PesquisaComponent from '../Components/PesquisaComponent';

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