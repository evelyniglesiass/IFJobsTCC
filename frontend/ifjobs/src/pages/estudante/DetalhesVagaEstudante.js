import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaEstudanteComponent from '../../components/estudante/DetalhesVagaEstudanteComponent';

// Detalhes de vagas na visão do estudante
const DetalhesVagaEstudante = () => {

  return (
    <>
    <nav className='header'><HeaderComponent/></nav>
    <section className='container-perfis'>
      <article><DetalhesVagaEstudanteComponent/></article>
    </section>
</>
  )
}

export default DetalhesVagaEstudante