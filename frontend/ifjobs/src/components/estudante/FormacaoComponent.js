import React from 'react'
import '../../App.scss';

const FormacaoComponent = () => {
  return (
    <div className='container-cursos-exper'>
      <section className='cabecalho-cursos-exper'>
        <h4 className='titulos-cursos-exper fonte-titulo'>Nível</h4>
        <h6 className='titulos-cursos-exper fonte-corpo'>Instituição</h6>
        <article>
          <h6 className='data-inicio fonte-corpo'>12/12/2020 </h6>
          <h6 className='data-fim fonte-corpo'>12/12/2023</h6>
        </article>
        <p className='conteudo-formacao fonte-corpo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </section>
    </div> 
  )
}

export default FormacaoComponent