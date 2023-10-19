import React from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../../components/empresa/DetalhesVagaComponent';

const DetalhesVaga = () => {

  return (
    <>
    <nav className='header'><HeaderComponent/></nav>
    <section className='container-perfis'>
      <article><DetalhesVagaComponent/></article>
    </section>
</>
  )
}

export default DetalhesVaga