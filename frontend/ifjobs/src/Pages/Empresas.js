import React from 'react'
import './Empresas.scss';
import HeaderComponent from '../Components/HeaderComponent'
import EmpresasComponent from '../Components/EmpresasComponent'

const Empresas = () => {
  return (
    <div className='container-empresas'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-emp'>
          <div className='div-empresa'><EmpresasComponent/></div>
        </div>
    </div>
  )
}

export default Empresas