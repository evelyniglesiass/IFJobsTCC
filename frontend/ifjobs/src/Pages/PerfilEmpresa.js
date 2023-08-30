import React from 'react'
import './PerfilEmpresa.scss';
import HeaderComponent from '../Components/HeaderComponent';
import PerfilEmpresaComponent from '../Components/PerfilEmpresaComponent';

const PerfilEmpresa = () => {
  return (
    <div className='container-perfil-empresa'>
        <nav className='header-component'><HeaderComponent/></nav>
        <section className='container-pe'>
          <article className='perfil-empresa-component'><PerfilEmpresaComponent/></article>
        </section>
    </div> 
  )
}

export default PerfilEmpresa