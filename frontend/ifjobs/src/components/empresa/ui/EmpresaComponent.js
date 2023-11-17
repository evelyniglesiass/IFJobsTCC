import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Import de Components
import VagasComponent from './VagasComponent'
import { useListarVagas } from '../../../hook/vagas/listarVagas.hook';

// Component para visualizar perfis de empresas
const EditarPerfilEmpresaComponent = () => {

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
    <>
        <section className='cabecalho-perfis'>
        <h1 className='img-perfis'>NE</h1>
          <h2 className='titulo-perfil fonte-titulo'>Nome da Empresa</h2>
          <p className='sociais fonte-titulo'>@LinkedIn</p>
        </section>
        <section className='sobre-perfis'>
          <h3 className='fonte-titulo'>Sobre a empresa</h3>
          <p className='fonte-corpo'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </section>
        <div className='perfil-empresa-vaga'><VagasComponent vagas={vagas}/></div>
    </>
  )
}

export default EditarPerfilEmpresaComponent