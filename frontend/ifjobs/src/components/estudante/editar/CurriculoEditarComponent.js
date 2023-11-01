import React from 'react'
import '../../../App.scss';

// Import de Components
import ExperienciasEditarComponent from './ExperienciasEditarComponent';
import CursosEditarComponent from './CursosEditarComponent';
import FormacaoEditarComponent from './FormacaoEditarComponent';

// Component com inputs para editar perfil do estudante
const CurriculoEditarComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
          <h1 className='img-perfis'>NC</h1>
          <h2 className='titulo-perfil fonte-titulo'><input type="text" class="form-editar" id="nome" placeholder="Nome" /></h2>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="usuario" placeholder="Nome de usuário" /></p>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="idade" placeholder="Idade" /></p>
        </article>
        
        <article className='objetivo-curriculo'>
          <h3 className='fonte-titulo'>Objetivo</h3>
          <p className='fonte-corpo'><input type="textarea" class="form-control" id="objetivo" placeholder="Objetivo" maxLength={250} rows={5}/></p>
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <div className='experiencia-component'><ExperienciasEditarComponent/></div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <article className='cursos-component'><CursosEditarComponent/></article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <article className='formacao-component'><FormacaoEditarComponent/></article>
        </article>
        
    </section>
  )
}

export default CurriculoEditarComponent