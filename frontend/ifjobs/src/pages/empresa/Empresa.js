import React from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresaEditarComponent from '../../components/empresa/EmpresaEditarComponent';

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