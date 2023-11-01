import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import CurriculoEditarComponent from '../../components/estudante/editar/CurriculoEditarComponent';

// Editar estudante 
const EditarEstudante = () => {
  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><CurriculoEditarComponent/></article>
        </section>
    </>
  )
}

export default EditarEstudante 