import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import VagasComponent from './VagasComponent'
import CadastrarVagaComponent from '../../empresa/cadastrar/CadastrarVagaComponent'
import { useListarVagasEmpresa } from '../../../hook/vagas/listarVagasEmpresa.hook';
import useGlobalUser from '../../../context/usuario/user.context';
import MenuEmpresaComponent from '../ui/menus/MenuEmpresaComponent';

// Component de perfil da empresa
const PerfilEmpresaComponent = ({ empresa, listarEmp }) => {

  const [empresaUm, setEmpresaUm] = useState([]);
  const [empresaDois, setEmpresaDois] = useState([]);

  useEffect(() => {

    function tel(v) {
      v = v.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d)(\d{4})$/, "$1-$2");
      return v;
    }

    setEmpresaUm([]);
    setEmpresaDois([]);

    setEmpresaUm((oldEmpresaUm) => ([...oldEmpresaUm,
    <section className=''>
      <h1 className='img-perfis'>{
        empresa.nome != null ? empresa.nome.slice(0, 2).toUpperCase() : "👤"
      }</h1>
      <h2 className='titulo-perfil fonte-titulo'>{empresa.nome}</h2>
      <h5 className='curso fonte-corpo'>@{empresa.nomeUsuario}</h5>
      <h5 className='curso fonte-corpo'>{empresa.cidade}</h5>
      <div className='menu-button-open menu-usuario-empresa'>
        <MenuEmpresaComponent empresa={empresa} listarEmp={listarEmp} />
      </div>
    </section>
    ]))

    setEmpresaDois((oldEmpresaDois) => ([...oldEmpresaDois,
    <section className=''>
      <h3 className='fonte-titulo titulo-pe'>Sobre a empresa</h3>
      <p className='fonte-corpo'>{empresa.descricao}</p>
      <p className='fonte-corpo'><strong>Telefone: </strong>{empresa.telefone ? tel(empresa.telefone) : ""}</p>
      <p className='fonte-corpo'><strong>Email: </strong>{empresa.email}</p>
    </section>
    ]))

  }, [empresa])

  const [vagas, setVagas] = useState([])
  const [user] = useGlobalUser();

  const { listarVagasEmpresa } = useListarVagasEmpresa();

  async function listar() {

    const response = await listarVagasEmpresa(user.id);

    setVagas(response)

  }

  useEffect(() => {

    listar();
  }, [])


  return (
    <>
      <section className='cabecalho-perfis'>
        {empresaUm}
      </section>

      <section className='sobre-perfis'>
        {empresaDois}
      </section>

      <div className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Vagas</h3>
        <CadastrarVagaComponent listar={listar} />
        <hr className='hr-vagas' />
        <VagasComponent vagas={vagas} acao={"editar"} />
      </div>
    </>
  )
}

export default PerfilEmpresaComponent