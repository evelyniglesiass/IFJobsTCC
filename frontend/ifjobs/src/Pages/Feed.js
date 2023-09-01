import React from 'react'
import '../App.scss';
import HeaderComponent from '../Components/HeaderComponent'
import VagasComponent from '../Components/VagasComponent';
import PesquisaComponent from '../Components/PesquisaComponent';

const Feed = () => {
  return (
    <div className='container-feed'>
        <nav className='header-component'><HeaderComponent/></nav>
        <section className='container-vagas'>
          <article className='div-pesquisa-vagas'><PesquisaComponent/></article>
          <article className='div-vaga'><VagasComponent/></article>
        </section>
    </div>
  )
}

export default Feed