import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import VagasComponent from './VagasComponent'
import EditarEmpresaButtonComponent from '../../ui/editar/EditarEmpresaButtonComponent';
import { useListarVagasEmpresa } from '../../../hook/vagas/listarVagasEmpresa.hook';
import useGlobalUser from '../../../context/usuario/user.context';

// Component de perfil da empresa com botão editar
const PerfilEmpresaComponent = ({empresa}) => {

  const [empresaUm, setEmpresaUm] = useState([]);
  const [empresaDois, setEmpresaDois] = useState([]);

  useEffect(() => {

    console.log("oi")
    console.log(empresa)

    setEmpresaUm([]);
    setEmpresaDois([]);
    
    //const icone = empresa.nome;
    //icone = icone.slice(0, 2);
    //{icone.toUpperCase()}

    setEmpresaUm((oldEmpresaUm) => ([...oldEmpresaUm, 
                                      <section className=''>
                                        <h1 className='img-perfis'>EM</h1>
                                        <h2 className='titulo-perfil fonte-titulo'>{empresa.nome}</h2>
                                        <h5 className='curso fonte-titulo'>{empresa.usuario}</h5>
                                      </section>
                                  ]))
    setEmpresaDois((oldEmpresaDois) => ([...oldEmpresaDois, 
                                        <section className=''>
                                          <h3 className='fonte-titulo'>Sobre a empresa</h3>
                                          <p className='fonte-corpo'>{empresa.telefone}</p>
                                          <p className='fonte-titulo'>{empresa.email}</p> 
                                          <p className='fonte-corpo'>{empresa.descricao}</p>
                                        </section>
                                        ]))

  }, [empresa])

  const [vagas, setVagas] = useState([])
  const [user] = useGlobalUser();

  const { listarVagasEmpresa } = useListarVagasEmpresa();

  useEffect(() => {
    async function listar() {

      const response = await listarVagasEmpresa(user.id);
      
      setVagas(response) 

    }

    listar();
  }, [])


  return ( 
    <>
        <section className='cabecalho-perfis'>
          {empresaUm}
          <EditarEmpresaButtonComponent/>
        </section>
        <section className='sobre-perfis'>
          {empresaDois}
        </section>
        <div className='perfil-empresa-vaga'><VagasComponent vagas={vagas}/></div>
    </>
  )
}

export default PerfilEmpresaComponent