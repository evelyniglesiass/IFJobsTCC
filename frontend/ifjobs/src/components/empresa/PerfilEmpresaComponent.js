import React from 'react'
import '../../App.scss';
import VagasComponent from './VagasComponent'
import EditarEmpresaButtonComponent from '../ui/editar/EditarEmpresaButtonComponent';

// Component de perfil da empresa com botão editar
const PerfilEmpresaComponent = () => {
  return ( 
    <>
        <section className='cabecalho-perfis'>
        <h1 className='img-perfis'>NE</h1>
          <h2 className='titulo-perfil fonte-titulo'>Nome da Empresa</h2>
          <h5 className='curso fonte-titulo'>Mini descrição</h5>
          <p className='sociais fonte-titulo'>@LinkedIn</p>
          <EditarEmpresaButtonComponent/>
        </section>
        <section className='sobre-perfis'>
          <h3 className='fonte-titulo'>Sobre a empresa</h3>
          <p className='fonte-corpo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </section>
        <div className='perfil-empresa-vaga'><VagasComponent/></div>
    </>
  )
}

export default PerfilEmpresaComponent