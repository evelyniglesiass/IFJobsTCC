import React, { useEffect, useState } from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import PerfilCurriculoComponent from '../../components/estudante/ui/PerfilCurriculoComponent';
import { useListarEstudanteEspecifico } from '../../hook/estudante/listarEstudanteEspecifico.hook';
import useGlobalUser from '../../context/usuario/user.context';
import { useListarCurriculo } from '../../hook/curriculo/listarCurriculo.hook';


// Perfil do estudante com botão editar
const PerfilEstudante = () => {

  const [estudante, setEstudante] = useState([]);
  const [curriculo, setCurriculo] = useState([]);
  const [user] = useGlobalUser();

  const { listarEstudanteEspecifico } = useListarEstudanteEspecifico();
  const { listarCurriculo } = useListarCurriculo();

  async function listar() {

    const response = await listarEstudanteEspecifico(user.id);
    setEstudante(response);

    const curResp = await listarCurriculo(user.id);
    setCurriculo(curResp);

  }

  useEffect(() => {

    listar();
  }, [])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <PerfilCurriculoComponent estudante={estudante} curriculo={curriculo} listarCur={listar} />
      </section>
    </>
  )
}

export default PerfilEstudante 