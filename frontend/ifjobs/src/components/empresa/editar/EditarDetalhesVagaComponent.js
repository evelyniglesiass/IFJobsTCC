import React from 'react'
import '../../../App.scss';

// Import de Components
import EditarVagaButtonComponent from '../../ui/editar/EditarVagaButtonComponent';

// Component com inputs para editar vaga
const EditarDetalhesVagaComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
          <h1 className='img-perfis'>TL</h1>
          <h2 className='titulo-perfil fonte-titulo'>Título</h2>
          <h5 className='curso fonte-titulo'>Cidade</h5>
          <p className='sociais fonte-titulo'>@LinkedIn @GitHub </p>
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

export default EditarDetalhesVagaComponent