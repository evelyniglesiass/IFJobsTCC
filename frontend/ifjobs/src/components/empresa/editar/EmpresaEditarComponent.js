import React from 'react'
import '../../../App.scss';

// Import de Components
import VagasComponent from '../VagasComponent'

// Component com inputs para editar perfil da empresa
const EmpresaEditarComponent = () => {
  return ( 
    <form>
        <section className='cabecalho-perfis'>
        <button className='button-salvar'>Salvar</button>

          <h2 className='titulo-perfil fonte-titulo'>
            <input type="text" class="form-editar" id="nome" placeholder="Nome" />
          </h2>
          <p>
            <input type="text" class="form-editar" id="usuario-empresa" placeholder="Nome de usuário" />
          </p>
          <p>
            <input type="text" class="form-editar" id="telefone-empresa" placeholder="Telefone" />
          </p>
          <p>
            <input type="email" class="form-editar" id="email-empresa" placeholder="E-mail" />
          </p>
          <p>
            <input type="password" class="form-editar" id="senha-empresa" placeholder="Senha" />
          </p>
          <p>
            <input type="text" class="form-editar" id="cidade-empresa" placeholder="Cidade" />
          </p>
        </section>
        <section className='sobre-perfis-editar'>
          <h3 className='fonte-titulo'>Sobre a empresa</h3>
          <p className='fonte-corpo'>            
            <textarea type="text" class="form-editar" id="desc" placeholder="Descrição" />
          </p>
        </section>
        <div className='perfil-empresa-vaga'><VagasComponent/></div>
    </form> 
  )
}

export default EmpresaEditarComponent