import React from 'react'
import './ExperienciasComponent.scss';

const ExperienciasComponent = () => {
  return (
    <div className='experiencias-container'>
      <div className='cabecalho-experiencias'>
        <h2 className='titulo-experiencias'>Experiencia</h2>
        <h6 className='empresa-experiencias'>Empresa</h6>
        <div>
          <h6 className='data-inicio-experiencias'>12/12/2020 - </h6>
          <h6 className='data-fim-experiencias'>12/12/2023</h6>
        </div>
        <p className='conteudo-experiencias'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </div>
  )
}

export default ExperienciasComponent