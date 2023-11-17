import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import CurriculoComponent from '../../components/estudante/ui/CurriculoComponent';

// Visualizar perfis de estudantes
const Estudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><CurriculoComponent/></article>
        </section>
    </>
  )
}

export default Estudante 