import React from 'react'
import './PerfilEmpresaComponent.scss';
import VagasComponent from './VagasComponent'

const PerfilEmpresaComponent = () => {
  return (
    <div className='perfil-empresa-component'>
        <div className='cabecalho-perfil-empresa'>
          <div className='img-perfil-empresa'><img src="" alt="imagem" /></div>
          <div className='titulo-perfil-empresa'><h2>Nome da empresa</h2></div>
          <div className='curso-perfil-empresa'><h5>Mini descrição</h5></div>
          <div className='sociais-perfil-empresa'><p>icones</p></div>
        </div>
        <div className='sobre-perfil-empresa'>
          <div className='titulo-sobre'><h3>Sobre a empresa</h3></div>
          <div className='conteudo-sobre'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p></div>
        </div>
        <h3 className='titulos-perfil-empresa'>Vagas</h3>
        <div className='perfil-empresa-vaga-component'><VagasComponent/></div>
    </div>
  )
}

export default PerfilEmpresaComponent