import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../../components/empresa/ui/DetalhesVagaComponent';
import { useParams } from 'react-router-dom';

// Detalhes de vagas na visão da empresa
const DetalhesVaga = () => {
  
  const { id } = useParams();

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><DetalhesVagaComponent /></article>
      </section>
    </>
  )
}

export default DetalhesVaga