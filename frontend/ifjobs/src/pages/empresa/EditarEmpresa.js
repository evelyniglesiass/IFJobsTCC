import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresaEditarComponent from '../../components/empresa/editar/EmpresaEditarComponent';

// Editar empresa
const EditarEmpresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><EmpresaEditarComponent/></article>
        </section>
    </> 
  )
}

export default EditarEmpresa 