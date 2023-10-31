import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import PerfilCurriculoComponent from '../../components/estudante/PerfilCurriculoComponent';


// Perfil do estudante com botão editar
const PerfilEstudante = () => {
  return (
    <>
      <nav className='header'><HeaderComponent/></nav>
      <section className='container-perfis'>
        <article><PerfilCurriculoComponent/></article>
      </section>
    </>
  )
}

export default PerfilEstudante 