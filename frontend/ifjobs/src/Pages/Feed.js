import React from 'react'
import './Feed.scss';
import HeaderComponent from '../Components/HeaderComponent'
import VagasComponent from '../Components/VagasComponent';
import PesquisaComponent from '../Components/PesquisaComponent';

const Feed = () => {
  return (
    <div className='container-feed'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='container-vagas'>
          <div className='div-pesquisa-vagas'><PesquisaComponent/></div>
          <div className='div-vaga'><VagasComponent/></div>
        </div>
    </div>
  )
}

export default Feed