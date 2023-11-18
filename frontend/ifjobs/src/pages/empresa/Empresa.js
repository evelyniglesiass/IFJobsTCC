import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresaComponent from '../../components/empresa/ui/EmpresaComponent';
import { useParams } from 'react-router-dom';
import { useListarEmpresaEspecifica } from '../../hook/empresa/listarEmpresaEspecifica.hook';


// Visualizar perfis de empresas
const Empresa = () => {

  const { id } = useParams();

  const [empresa, setEmpresa] = useState([])

  const { listarEmpresaEspecifica } = useListarEmpresaEspecifica();

  useEffect(() => {
    async function listar() {

      const response = await listarEmpresaEspecifica(id);
      setEmpresa(response) 

    }

    listar();
  }, [])

  return (
    <>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-perfis'>
          <article><EmpresaComponent empresa={empresa}/></article>
        </section>
    </> 
  )
}

export default Empresa 