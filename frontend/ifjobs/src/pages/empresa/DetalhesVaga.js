import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../../components/empresa/ui/DetalhesVagaComponent';
import { useParams } from 'react-router-dom';
import { useListarVagaEspecifica } from '../../hook/vagas/listarVagaEspecifica.hook';

// Detalhes de vagas na visão da empresa
const DetalhesVaga = () => {
  
  const { id } = useParams();

  const [vaga, setVaga] = useState([])

  const { listarVagaEspecifica } = useListarVagaEspecifica();

  useEffect(() => {
    async function listar() {

      const response = await listarVagaEspecifica(id);
      
      setVaga(response) 

    }

    listar();
  }, [])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><DetalhesVagaComponent vaga={vaga}/></article>
      </section>
    </>
  )
}

export default DetalhesVaga