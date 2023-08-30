import React from 'react'
import './PerfilEmpresa.scss';
import HeaderComponent from '../Components/HeaderComponent';
import PerfilEmpresaComponent from '../Components/PerfilEmpresaComponent';

const PerfilEmpresa = () => {
  return (
    <div className='container-perfil-empresa'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-pe'>
          <div className='perfil-empresa-component'><PerfilEmpresaComponent/></div>
        </div>
    </div> 
  )
}

export default PerfilEmpresa