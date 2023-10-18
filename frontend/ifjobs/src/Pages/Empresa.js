import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/HeaderComponent';
import PerfilEmpresaComponent from '../components/PerfilEmpresaComponent';
import EmpresaEditarComponent from '../components/EmpresaEditarComponent';

const Empresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><EmpresaEditarComponent/></article>
        </section>
    </> 
  )
}

export default Empresa 