import React from 'react'
import '../App.scss';
import VagasComponent from './VagasComponent'

const PerfilEmpresaComponent = () => {
  return (
    <div className='perfil-empresa-component'>
        <section className='cabecalho-perfil-empresa'>
          <img src="" alt="imagem" className='img-perfil-empresa'/>
          <h2 className='titulo-perfil-empresa'>Nome da empresa</h2>
          <h5 className='curso-perfil-empresa'>Mini descrição</h5>
          <p className='sociais-perfil-empresa'>icones</p>
        </section>
        <section className='sobre-perfil-empresa'>
          <h3 className='titulo-sobre'>Sobre a empresa</h3>
          <p className='conteudo-sobre'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </section>
        <h3 className='titulos-perfil-empresa'>Vagas</h3>
        <div className='perfil-empresa-vaga-component'><VagasComponent/></div>
    </div>
  )
}

export default PerfilEmpresaComponent