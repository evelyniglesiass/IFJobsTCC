import React from 'react'
import '../../App.scss';

// Import de Components
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';

// Import toastify
import 'react-toastify/dist/ReactToastify.min.css'; 
import EditarCurriculoButtonComponent from '../ui/editar/EditarCurriculoButtonComponent';

// Component de perfil do estudante com botão de editar
const PerfilCurriculoComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
          <h1 className='img-perfis'>NC</h1>
          <h2 className='titulo-perfil fonte-titulo'>Nome Completo</h2>
          <h5 className='curso fonte-titulo'>Curso</h5>
          <p className='sociais fonte-titulo'>@LinkedIn @GitHub </p>
          <EditarCurriculoButtonComponent/>
        </article>
        
        <article className='objetivo-curriculo'>
          <h3 className='fonte-titulo'>Objetivo</h3>
          <p className='fonte-corpo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <div className='experiencia-component'><ExperienciasComponent/></div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <article className='cursos-component'><CursosComponent/></article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <article className='formacao-component'><FormacaoComponent/></article>
        </article>   
    </section>
  )
}

export default PerfilCurriculoComponent