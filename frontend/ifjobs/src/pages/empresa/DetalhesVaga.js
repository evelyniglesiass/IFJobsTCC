import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import DetalhesVagaComponent from '../../components/empresa/ui/DetalhesVagaComponent';
import { useParams } from 'react-router-dom';
import { useListarVagaEspecifica } from '../../hook/vagas/listarVagaEspecifica.hook';
import { useListarCandidatosVaga } from '../../hook/estudante/listarCandidatosVaga.hook';
import { useListarVagasEmpresa } from '../../hook/vagas/listarVagasEmpresa.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Detalhes de vagas na visão da empresa
const DetalhesVaga = () => {
  
  const { id } = useParams();
  const [user] = useGlobalUser();

  const [vaga, setVaga] = useState([])
  const [estudantes, setEstudantes] = useState([])
  const [todasVagas, setTodasVagas] = useState([])
  const [encontrou, setEncontrou] = useState(false)

  const { listarVagaEspecifica } = useListarVagaEspecifica();
  const { listarCandidatosVaga } = useListarCandidatosVaga();
  const { listarVagasEmpresa } = useListarVagasEmpresa();

  useEffect(() => {
    async function listar() {

      const vagResp = await listarVagaEspecifica(id);
      setVaga(vagResp) 

      const estResp = await listarCandidatosVaga(id);
      setEstudantes(estResp)

      const Resp = await listarVagasEmpresa(user.id);
      setTodasVagas(Resp)

    }

    listar();
  }, [])

  useEffect(() => {

    async function enc() {
      todasVagas.forEach(v => {

        var obj = v;

        if (vaga && obj) {
          if(obj.id === vaga.id){
            setEncontrou(true);
          }
        }

      });
    }

      enc()

  }, [todasVagas, vaga])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><DetalhesVagaComponent vaga={vaga} estudantes={estudantes} encontrou={encontrou}/></article>
      </section>
    </>
  )
}

export default DetalhesVaga