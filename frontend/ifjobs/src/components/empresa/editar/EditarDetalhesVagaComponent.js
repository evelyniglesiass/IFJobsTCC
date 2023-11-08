import React from 'react'
import '../../../App.scss';

// Import de Components

// Component com inputs para editar vaga
const EditarDetalhesVagaComponent = () => {
  return (
    <section>
        <article className='cabecalho-perfis'>
          <button className='button-salvar' id='button-salvar-vaga'>Salvar</button>
          <h2 className='titulo-perfil fonte-titulo'>
            <input type="text" class="form-editar" id="titulo-vaga" placeholder="Título" />
          </h2>
          <h5 className='curso fonte-titulo'>
            <input type="text" class="form-editar" id="cidade-vaga" placeholder="Cidade" />
          </h5>
        </article>

        <article className='sobre-perfis'>

          <p className='fonte-corpo'>
            <input type="text" class="form-editar" id="salario" placeholder="Salário" />
          </p>

          <p className='fonte-corpo'>
            <input type="text" class="form-editar" id="idade" placeholder="Idade" />
          </p>

          <p className='fonte-corpo'>
            <textarea type="text" class="form-editar" id="descricao-vaga" placeholder="Descrição" />
          </p>
        </article>

    </section>
  )
}

export default EditarDetalhesVagaComponent