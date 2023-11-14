import React from 'react'
import '../../../App.scss';

// Import de Components
import ExperienciasEditarComponent from './ExperienciasEditarComponent';
import CursosEditarComponent from './CursosEditarComponent';
import FormacaoEditarComponent from './FormacaoEditarComponent';
import DicasObjetivoComponent from '../../dicas/DicasObjetivoComponent';
import DicasExperienciaComponent from '../../dicas/DicasExperienciaComponent';
import DicasCursosComponent from '../../dicas/DicasCursosComponent';
import DicasFormacoesComponent from '../../dicas/DicasFormacoesComponent';



// Component com inputs para editar perfil do estudante
const CurriculoEditarComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
        <button className='button-salvar'>Salvar</button>
          <h2 className='titulo-perfil fonte-titulo'><input type="text" class="form-editar" id="nome" placeholder="Nome" /></h2>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="usuario" placeholder="Nome de usuário" /></p>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="idade-estudante-editar" placeholder="Idade" /></p>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="telefone" placeholder="Telefone" /></p>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="cidade" placeholder="Cidade" /></p>
          <p className='curso fonte-titulo'><input type="text" class="form-editar" id="email" placeholder="Email" /></p>
          <p className='curso fonte-titulo'><input type="password" class="form-editar" id="senha" placeholder="Senha" /></p>
        </article>
        
        <article className='objetivo-curriculo-editar'>
          <h3 className='fonte-titulo'>Objetivo</h3>
          <DicasObjetivoComponent/>
          <p className='fonte-corpo'><textarea type="textarea" class="form-editar" id="objetivo" placeholder="Objetivo" maxLength={250} rows={5}/></p>
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <DicasExperienciaComponent/>
          <div className='experiencia-component'><ExperienciasEditarComponent/></div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <DicasCursosComponent/>
          <article className='cursos-component'><CursosEditarComponent/></article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <DicasFormacoesComponent/>
          <article className='formacao-component'><FormacaoEditarComponent/></article>
        </article>
        
    </section>
  )
}

export default CurriculoEditarComponent