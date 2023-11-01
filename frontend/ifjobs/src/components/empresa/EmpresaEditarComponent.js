import React from 'react'
import '../../App.scss';

// Import de Components
import VagasComponent from './VagasComponent'

// Component com inputs para editar perfil da empresa
const EmpresaEditarComponent = () => {
  return ( 
    <form>
        <section className='cabecalho-perfis'>
          <div class="input-cadastrar txt-form-group"> 
              <input type="text" class="form-control" id="nome" placeholder="Nome da Empresa" />
          </div>
          <h5 className='curso fonte-titulo'>Mini descrição</h5>
          <p className='sociais fonte-titulo'>@LinkedIn</p>
        </section>
        <section className='sobre-perfis'>
          <h3 className='fonte-titulo'>Sobre a empresa</h3>
          <p className='fonte-corpo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </section>
        <div className='perfil-empresa-vaga'><VagasComponent/></div>
    </form> 
  )
}

export default EmpresaEditarComponent