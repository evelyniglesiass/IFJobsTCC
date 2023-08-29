import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import './PerfilEstudante.scss';
import CurriculoComponent from '../Components/CurriculoComponent';

const PerfilEstudante = () => {
  return (
    <div className='container-perfil'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-p'>
          <div className='curriculo-component'><CurriculoComponent/></div>
        </div>
    </div>
  )
}

export default PerfilEstudante 