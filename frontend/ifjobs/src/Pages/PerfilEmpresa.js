import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/HeaderComponent';
import PerfilEmpresaComponent from '../components/PerfilEmpresaComponent';

const PerfilEmpresa = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><PerfilEmpresaComponent/></article>
        </section>
    </> 
  )
}

export default PerfilEmpresa 