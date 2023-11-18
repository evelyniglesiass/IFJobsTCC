import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import CurriculoComponent from '../../components/estudante/ui/CurriculoComponent';
import { useParams } from 'react-router-dom';
import { useListarEstudanteEspecifico } from '../../hook/estudante/listarEstudanteEspecifico.hook';
import { useListarCurriculo } from '../../hook/curriculo/listarCurriculo.hook';

// Visualizar perfis de estudantes
const Estudante = () => {

  const [estudante, setEstudante] = useState([]);
  const [curriculo, setCurriculo] = useState([]);
  const { id } = useParams();

  const { listarEstudanteEspecifico } = useListarEstudanteEspecifico();
  const { listarCurriculo } = useListarCurriculo();

  useEffect(() => {
    async function listar() { 

      const response = await listarEstudanteEspecifico(id);
      setEstudante(response);
      console.log(response)

      const curResp = await listarCurriculo(id);
      setCurriculo(curResp);
      console.log(curResp)

    }

    listar();
  }, [])

  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><CurriculoComponent estudante={estudante} curriculo={curriculo}/></article>
        </section>
    </>
  )
}

export default Estudante 