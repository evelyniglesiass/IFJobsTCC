import React from 'react'
import '../App.scss';
import HeaderComponent from '../Components/HeaderComponent'
import VagasComponent from '../Components/VagasComponent'

const Salvos = () => {
  return (
    <div className='container-feed'>
        <nav className='header-component'><HeaderComponent/></nav>
        <section className='container-vagas'>
            <article className='div-vaga'><VagasComponent/></article>
        </section>
    </div>
  )
}

export default Salvos