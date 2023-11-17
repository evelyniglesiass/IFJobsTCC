import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresaComponent from '../../components/empresa/ui/EmpresaComponent';


// Visualizar perfis de empresas
const Empresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><EmpresaComponent/></article>
        </section>
    </> 
  )
}

export default Empresa 