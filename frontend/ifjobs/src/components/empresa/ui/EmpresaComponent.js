import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Import de Components
import VagasComponent from './VagasComponent'
import { useListarVagasEmpresa } from '../../../hook/vagas/listarVagasEmpresa.hook';
import { useParams } from 'react-router-dom';

// Component para visualizar perfis de empresas
const EditarPerfilEmpresaComponent = ({empresa}) => {

  const [empresaTag, setEmpresaTag] = useState([]);

  useEffect(() => {

    setEmpresaTag([]);

    setEmpresaTag((oldEmpresaTag) => ([...oldEmpresaTag, 
                                      <section>
                                        <section className='cabecalho-perfis'>
                                          <h1 className='img-perfis'>NE</h1>
                                          <h2 className='titulo-perfil fonte-titulo'>{empresa.nome}</h2>
                                          <p className='sociais fonte-titulo'>{empresa.email}</p>
                                        </section>
                                        <section className='sobre-perfis'>
                                          <h3 className='fonte-titulo'>Sobre a empresa</h3>
                                          <p className='fonte-corpo'>{empresa.descricao}</p>
                                        </section>
                                      </section>
                                    ])) 

  }, [empresa])

  const [vagas, setVagas] = useState([])
  const { listarVagasEmpresa } = useListarVagasEmpresa();

  const { id } = useParams();

  useEffect(() => {
    async function listar() {

      const response = await listarVagasEmpresa(id);
      
      setVagas(response) 

    }

    listar();
  }, [])

  return ( 
    <>
      {empresaTag}
      <div className='perfil-empresa-vaga'><VagasComponent vagas={vagas}/></div>
    </>
  )
}

export default EditarPerfilEmpresaComponent