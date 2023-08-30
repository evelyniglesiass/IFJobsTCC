import React from 'react'
import './Empresas.scss';
import HeaderComponent from '../Components/HeaderComponent'
import EmpresasComponent from '../Components/EmpresasComponent'
import PesquisaComponent from '../Components/PesquisaComponent';

const Empresas = () => {
  return (
    <div className='container-empresas'>
        <nav className='header-component'><HeaderComponent/></nav>
        <section className='container-emp'>
          <article className='div-pesquisa-empresas'><PesquisaComponent/></article>
          <article className='div-empresa'><EmpresasComponent/></article>
        </section>
    </div>
  )
}

export default Empresas