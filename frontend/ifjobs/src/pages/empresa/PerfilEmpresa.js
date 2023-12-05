import React, { useEffect, useState } from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent';
import PerfilEmpresaComponent from '../../components/empresa/ui/PerfilEmpresaComponent';
import { useListarEmpresaEspecifica } from '../../hook/empresa/listarEmpresaEspecifica.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Perfil da empresa com botão editar
const PerfilEmpresa = () => {

  const [empresa, setEmpresa] = useState([]);
  const [user] = useGlobalUser();

  const { listarEmpresaEspecifica } = useListarEmpresaEspecifica();

  async function listar() {

    const response = await listarEmpresaEspecifica(user.id);
    setEmpresa(response);

  }

  useEffect(() => {

    listar();
  }, [])

  return (
    <>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-perfis'>
        <article><PerfilEmpresaComponent empresa={empresa} listarEmp={listar} /></article>
      </section>
    </>
  )
}

export default PerfilEmpresa 