import React from 'react'
import '../../App.scss';
import EditarVagaButtonComponent from '../ui/editar/EditarVagaButtonComponent';

// Component para detalhar vaga na visão da empresa
const DetalhesVagaComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
          <h1 className='img-perfis'>TL</h1>
          <h2 className='titulo-perfil fonte-titulo'>Título</h2>
          <h5 className='curso fonte-titulo'>Cidade</h5>
          <EditarVagaButtonComponent/>
        </article>
        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Detalhes</h3>
          <p className='fonte-corpo'>Descrição</p>
          <p className='fonte-corpo'>Salario e Idade</p>
        </article>

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Estudantes</h3>
          <p className='fonte-corpo'>Nomes</p>
        </article>

    </section>
  )
}

export default DetalhesVagaComponent