import React from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaEstudanteComponent from '../../components/estudante/DetalhesVagaEstudanteComponent';

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