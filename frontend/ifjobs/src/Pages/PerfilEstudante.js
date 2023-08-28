import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import './PerfilEstudante.scss';
import HeaderPerfilComponent from '../Components/HeaderPerfilComponent';
import CurriculoComponent from '../Components/CurriculoComponent';
import ExperienciasComponent from '../Components/ExperienciasComponent';
import CursosComponent from '../Components/CursosComponent';

const PerfilEstudante = () => {
  return (
    <div className='container-perfil'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-p'>
          <div><HeaderPerfilComponent/></div>
          <div><CurriculoComponent/></div>
          <div><ExperienciasComponent/></div>
          <div><CursosComponent/></div>
        </div>
    </div>
  )
}

export default PerfilEstudante