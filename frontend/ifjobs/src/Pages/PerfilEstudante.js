import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import './PerfilEstudante.scss';
import CurriculoComponent from '../Components/CurriculoComponent';
import ExperienciasComponent from '../Components/ExperienciasComponent';
import CursosComponent from '../Components/CursosComponent';

const PerfilEstudante = () => {
  return (
    <div className='container-perfil'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-p'>
          <div className='curriculo-component'><CurriculoComponent/></div>
          <div className='experiencia-component'><ExperienciasComponent/></div>
          <div className='cursos-component'><CursosComponent/></div>
        </div>
    </div>
  )
}

export default PerfilEstudante