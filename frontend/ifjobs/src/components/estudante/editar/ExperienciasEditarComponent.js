import React from 'react'
import '../../../App.scss';

// Component para experiência profissional
const ExperienciasEditarComponent = () => { 
  return (
    <div className='container-cursos-exper'>
      <section className='cabecalho-cursos-exper'>
        <h4 className='titulos-cursos-exper fonte-titulo'><input type="text" class="form-editar" id="experiencia" placeholder="Título" /></h4>
        <h6 className='titulos-cursos-exper fonte-corpo'><input type="text" class="form-editar" id="empresa" placeholder="Empresa" /></h6>
        <article>
          <h6 className='data-inicio fonte-corpo'><input type="date" class="form-editar" id="data-inicial"/> </h6>
          <h6 className='data-fim fonte-corpo'><input type="date" class="form-editar" id="data-final"/></h6>
        </article>
        <p className='conteudo-experiencias fonte-corpo'><input type="textarea" class="form-editar" id="conteudo-experiencia" placeholder="Descrição" maxLength={250} /></p>
      </section>
    </div> 
  )
}

export default ExperienciasEditarComponent