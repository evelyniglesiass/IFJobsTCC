import React, { useEffect, useState } from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaEstudanteComponent from '../../components/estudante/ui/DetalhesVagaEstudanteComponent';
import { useListarVagaEspecifica } from '../../hook/vagas/listarVagaEspecifica.hook';
import { useParams } from 'react-router-dom';
import { useListarCandidatosVaga } from '../../hook/estudante/listarCandidatosVaga.hook';
import { useListarEstudanteEspecifico } from '../../hook/estudante/listarEstudanteEspecifico.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Detalhes de vagas na visão do estudante
const DetalhesVagaEstudante = () => {

  const { id } = useParams();

  const [vaga, setVaga] = useState([])
  const [candidatos, setCandidatos] = useState([])
  const [estudante, setEstudante] = useState()
  const [encontrou, setEncontrou] = useState(false)
  const [user] = useGlobalUser();

  const { listarVagaEspecifica } = useListarVagaEspecifica();
  const { listarCandidatosVaga } = useListarCandidatosVaga();
  const { listarEstudanteEspecifico } = useListarEstudanteEspecifico();

  useEffect(() => {
    async function listar() {

      const vagResp = await listarVagaEspecifica(id, setVaga);
      setVaga(vagResp)

      const canResp = await listarCandidatosVaga(id);
      setCandidatos(canResp)

      const response = await listarEstudanteEspecifico(user.id);
      setEstudante(response);

    }

    listar();

  }, [])

  useEffect(() => {

    async function cand() {
      candidatos.forEach(c => {

        var obj = c;

        if (estudante && obj) {
          if (obj.id === estudante.id) {
            setEncontrou(true);
          }
        }

      });
    }

    cand()

  }, [estudante, candidatos])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><DetalhesVagaEstudanteComponent vaga={vaga} encontrou={encontrou} /></article>
      </section>
    </>
  )
}

export default DetalhesVagaEstudante