import React from 'react'
import './CurriculoComponent.scss';
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';

const CurriculoComponent = () => {
  return (
    <section className='curriculo-component'>
        <article className='cabecalho-curriculo'>
          <img src="" alt="imagem" className='img-curriculo'/>
          <h2 className='titulo-curriculo'>Nome completo</h2>
          <h5 className='curso-curriculo'>Curso</h5>
          <p className='sociais-curriculo'>icones</p>
        </article>
        <article className='sobre-curriculo'>
          <h3 className='titulo-sobre'>Sobre mim</h3>
          <p className='conteudo-sobre'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </article>
        <article className='objetivo-curriculo'>
          <h3 className='titulo-objetivo'>Objetivo</h3>
          <p className='conteudo-objetivo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </article>
        <h3 className='titulos-curriculo'>Experiência Profissional</h3>
        <div className='experiencia-component'><ExperienciasComponent/></div>
        <h3 className='titulos-curriculo'>Cursos e Certificados</h3>
        <article className='cursos-component'><CursosComponent/></article>
    </section>
  )
}

export default CurriculoComponent