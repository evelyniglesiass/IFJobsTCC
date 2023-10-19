import React from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/VagasComponent'
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../../components/ui/PesquisaComponent';

const Salvos = () => {
  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-vagas'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent></AtalhoPerfilComponent>
          <article className='div-vaga'><VagasComponent/></article>
        </section>
    </div>
  )
}

export default Salvos