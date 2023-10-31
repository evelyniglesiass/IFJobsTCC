import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import EditarDetalhesVagaComponent from '../../components/empresa/EditarDetalhesVagaComponent';

// Página com inputs para editar vaga
const EditarVaga = () => {
  return (
    <>
    <nav className='header'><HeaderComponent/></nav>
    <section className='container-perfis'>
      <article><EditarDetalhesVagaComponent/></article>
    </section>
</>
  )
}

export default EditarVaga