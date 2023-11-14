import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/VagasComponent';
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import { useListarVagas } from '../../hook/vagas/listarVagas.hook';

// Feed com vagas publicadas
const Feed = () => {

  const [vagas, setVagas] = useState([])

  const { listarVagas } = useListarVagas();

  useEffect(() => {
    async function listar() {

      const response = await listarVagas();
      
      setVagas(response) 

    }

    listar();
  }, [])


  return (
    <div className='container-pages'>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-vagas'>
        <article className='pesquisa-vagas'><PesquisaComponent /></article>
        <AtalhoPerfilComponent />
        <article className='div-vaga'><VagasComponent vagas={vagas}/></article>
      </section>
    </div>
  )
}

export default Feed