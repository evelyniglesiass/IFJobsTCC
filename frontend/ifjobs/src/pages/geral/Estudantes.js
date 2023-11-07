import React from 'react'
import '../../App.scss';

// Import de Components
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import EstudantesComponent from '../../components/estudante/EstudantesComponent';
import HeaderComponent from '../../components/ui/HeaderComponent';

// Feed com empresas cadastradas
const Estudantes = () => {
  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent/>
          <article className='div-empesa'><EstudantesComponent/></article>
        </section>
    </div>
  )
}

export default Estudantes