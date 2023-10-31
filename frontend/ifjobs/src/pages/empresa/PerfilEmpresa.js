import React from 'react'
import '../../App.scss';

// Imports de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import PerfilEmpresaComponent from '../../components/empresa/PerfilEmpresaComponent';

// Perfil da empresa com botão editar
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