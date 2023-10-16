import React from 'react'
import '../App.scss';
import HeaderComponent from '../components/HeaderComponent'
import VagasComponent from '../components/VagasComponent'

const Salvos = () => {
  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-vagas'>
            <article className='div-vaga'><VagasComponent/></article>
        </section>
    </div>
  )
}

export default Salvos