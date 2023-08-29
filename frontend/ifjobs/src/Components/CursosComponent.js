import React from 'react'
import './CursosComponent.scss';

const CursosComponent = () => {
  return (
    <div className='cursos-container'>
      <div className='cabecalho-cursos'>
        <div className='titulo-cursos'><h2>Curso</h2></div>
        <div className='empresa-cursos'><h6>Empresa</h6></div>
        <div>
          <h6 className='data-inicio-cursos'>12/12/2020 - </h6>
          <h6 className='data-fim-cursos'>12/12/2023</h6>
        </div>
        <div className='conteudo-cursos'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p></div>
      </div>
    </div>
  )
}

export default CursosComponent