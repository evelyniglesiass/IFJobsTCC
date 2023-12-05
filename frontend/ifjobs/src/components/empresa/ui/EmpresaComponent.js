import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import VagasComponent from './VagasComponent'
import { useListarVagasEmpresa } from '../../../hook/vagas/listarVagasEmpresa.hook';
import { useParams } from 'react-router-dom';

// Component para visualizar empresas
const EditarPerfilEmpresaComponent = ({ empresa }) => {

  const [empresaTag, setEmpresaTag] = useState([]);

  useEffect(() => {

    function tel(v) {
      v = v.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d)(\d{4})$/, "$1-$2");
      return v;
    }

    setEmpresaTag([]);

    setEmpresaTag((oldEmpresaTag) => ([...oldEmpresaTag,
    <section>
      <section className='cabecalho-perfis'>
        <h1 className='img-perfis'>{
          empresa.nome != null ? empresa.nome.slice(0, 2).toUpperCase() : "👤"
        }</h1>
        <h2 className='titulo-perfil fonte-titulo'>{empresa.nome}</h2>
        <h5 className='curso fonte-corpo'>@{empresa.nomeUsuario}</h5>
        <h5 className='curso fonte-corpo'>{empresa.cidade}</h5>
      </section>
      <section className='sobre-perfis'>
        <h3 className='fonte-titulo titulo-pe'>Sobre a empresa</h3>
        <p className='fonte-corpo'>{empresa.descricao}</p>
        <p className='fonte-corpo'><strong>Telefone: </strong>{empresa.telefone ? tel(empresa.telefone) : ""}</p>
        <p className='fonte-corpo'><strong>Email: </strong><a style={{ color: '#146869' }} href={`mailto:${empresa.email}`}>{empresa.email}</a></p>
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
      <div className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Vagas</h3>
        <hr />
        <VagasComponent vagas={vagas} />
      </div>
    </>
  )
}

export default EditarPerfilEmpresaComponent