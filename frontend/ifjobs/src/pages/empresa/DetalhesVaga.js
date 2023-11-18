import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../../components/empresa/ui/DetalhesVagaComponent';
import { useParams } from 'react-router-dom';
import { useListarVagaEspecifica } from '../../hook/vagas/listarVagaEspecifica.hook';
import { useListarCandidatosVaga } from '../../hook/estudante/listarCandidatosVaga.hook';

// Detalhes de vagas na visão da empresa
const DetalhesVaga = () => {
  
  const { id } = useParams();

  const [vaga, setVaga] = useState([])
  const [estudantes, setEstudantes] = useState([])

  const { listarVagaEspecifica } = useListarVagaEspecifica();
  const { listarCandidatosVaga } = useListarCandidatosVaga();

  useEffect(() => {
    async function listar() {

      const vagResp = await listarVagaEspecifica(id);
      setVaga(vagResp) 
      console.log(vagResp)

      const estResp = await listarCandidatosVaga(id);
      setEstudantes(estResp)
      console.log(estResp)

    }

    listar();
  }, [])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><DetalhesVagaComponent vaga={vaga} estudantes={estudantes}/></article>
      </section>
    </>
  )
}

export default DetalhesVaga