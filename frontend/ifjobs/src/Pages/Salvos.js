import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import VagasComponent from '../Components/VagasComponent'

const Salvos = () => {
  return (
    <div className='container-feed'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-vagas'>
            <div className='div-vaga'><VagasComponent/></div>
        </div>
    </div>
  )
}

export default Salvos