import React from 'react'
import './CurriculoComponent.scss';
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';

const CurriculoComponent = () => {
  return (
    <div className='curriculo-component'>
        <div className='cabecalho-curriculo'>
          <div className='img-curriculo'><img src="" alt="imagem" /></div>
          <div className='titulo-curriculo'><h2>Nome completo</h2></div>
          <div className='curso-curriculo'><h5>Curso</h5></div>
          <div className='sociais-curriculo'><p>icones</p></div>
        </div>
        <div className='sobre-curriculo'>
          <div className='titulo-sobre'><h3>Sobre mim</h3></div>
          <div className='conteudo-sobre'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p></div>
        </div>
        <div className='objetivo-curriculo'>
          <div className='titulo-objetivo'><h3>Objetivo</h3></div>
          <div className='conteudo-objetivo'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p></div>
        </div>
        <h3 className='titulos-curriculo'>Experiencias</h3>
        <div className='experiencia-component'><ExperienciasComponent/></div>
        <h3 className='titulos-curriculo'>Cursos</h3>
        <div className='cursos-component'><CursosComponent/></div>
    </div>
  )
}

export default CurriculoComponent