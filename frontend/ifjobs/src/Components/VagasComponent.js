import React from 'react'
import './VagasComponent.scss';

const VagasComponent = () => {
  return (
    <div className='a'>
      <div className='container'>
        <div className='div-titulo'>
            <h2>Título teste</h2>
        </div>
        <div className='div-corpo'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className='div-botao'>
            <input type="button" value='Candidadar-me' className='btn btn-dark'/>
        </div>
      </div>

      <div className='container'>
        <div className='div-titulo'>
            <h2>Título teste</h2>
        </div>
        <div className='div-corpo'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className='div-botao'>
            <input type="button" value='Candidadar-me' className='btn btn-dark'/>
        </div>
      </div>
    </div>    
  )
}

export default VagasComponent