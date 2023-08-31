import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import '../App.scss';
import CurriculoComponent from '../Components/CurriculoComponent';

const PerfilEstudante = () => {
  return (
    <div className='container-perfil'>
        <nav className='header-component'><HeaderComponent/></nav>
        <section className='container-p'>
          <article className='curriculo-component'><CurriculoComponent/></article>
        </section>
    </div>
  )
}

export default PerfilEstudante 