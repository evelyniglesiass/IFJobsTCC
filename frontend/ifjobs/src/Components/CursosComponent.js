import React from 'react'
import '../App.scss';

const CursosComponent = () => {
  return (
    <div className='cursos-container'>
      <section className='cabecalho-cursos'>
        <h2 className='titulo-cursos'>Curso</h2>
        <h6 className='empresa-cursos'>Empresa</h6>
        <article>
          <h6 className='data-inicio-cursos'>12/12/2020 - </h6>
          <h6 className='data-fim-cursos'>12/12/2023</h6>
        </article>
        <p className='conteudo-cursos'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </section>
    </div>
  )
}

export default CursosComponent