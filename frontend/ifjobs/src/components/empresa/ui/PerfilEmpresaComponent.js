import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import VagasComponent from './VagasComponent'
import CadastrarVagaComponent from '../../empresa/cadastrar/CadastrarVagaComponent'
import { useListarVagasEmpresa } from '../../../hook/vagas/listarVagasEmpresa.hook';
import useGlobalUser from '../../../context/usuario/user.context';
import EmpresaEditarComponent from '../editar/EmpresaEditarComponent';

// Component de perfil da empresa com botão editar
const PerfilEmpresaComponent = ({empresa}) => {

  const [empresaUm, setEmpresaUm] = useState([]);
  const [empresaDois, setEmpresaDois] = useState([]);
  const [icone, setIcone] = useState("");

  useEffect(() => {

    setEmpresaUm([]);
    setEmpresaDois([]);

    setEmpresaUm((oldEmpresaUm) => ([...oldEmpresaUm, 
                                      <section className=''>
                                        <h1 className='img-perfis'>{
                                          empresa.nome != null ? empresa.nome.slice(0, 2).toUpperCase() : "👤"
                                        }</h1>
                                        <h2 className='titulo-perfil fonte-titulo'>{empresa.nome}</h2>
                                        <h5 className='curso fonte-titulo'>{empresa.nomeUsuario}</h5>
                                        <h5 className='curso fonte-titulo'>{empresa.cidade}</h5>
                                      </section>
                                  ]))
                                  
    setEmpresaDois((oldEmpresaDois) => ([...oldEmpresaDois, 
                                        <section className=''>
                                          <h3 className='fonte-titulo'>Sobre a empresa</h3>
                                          <p className='fonte-corpo'>{empresa.telefone}</p>
                                          <p className='fonte-corpo'><a style={{color:'#146869'}} href='mailto:${empresa.email}'>{empresa.email}</a></p> 
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
          <EmpresaEditarComponent empresa={empresa}/>
          <CadastrarVagaComponent/>
        </section>

        <section className='sobre-perfis'>
          {empresaDois}
        </section>

        <div className='perfil-empresa-vaga'>
          <VagasComponent vagas={vagas} acao={"editar"}/>
        </div>
    </>
  )
}

export default PerfilEmpresaComponent