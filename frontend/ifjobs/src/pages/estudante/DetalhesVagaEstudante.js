import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaEstudanteComponent from '../../components/estudante/ui/DetalhesVagaEstudanteComponent';
import { useListarVagaEspecifica } from '../../hook/vagas/listarVagaEspecifica.hook';
import { useListarCandidatosVaga } from '../../hook/estudante/listarCandidatosVaga.hook';
import { useParams } from 'react-router-dom';

// Detalhes de vagas na visão do estudante
const DetalhesVagaEstudante = () => {

  const { id } = useParams();

  const [vaga, setVaga] = useState([])

  const { listarVagaEspecifica } = useListarVagaEspecifica();

  useEffect(() => {
    async function listar() {

      const vagResp = await listarVagaEspecifica(id);
      setVaga(vagResp) 

    }

    listar();
  }, [])

  return (
    <>
    <nav className='header'><HeaderComponent/></nav>
    <section className='container-perfis'>
      <article><DetalhesVagaEstudanteComponent vaga={vaga}/></article>
    </section>
</>
  )
}

export default DetalhesVagaEstudante