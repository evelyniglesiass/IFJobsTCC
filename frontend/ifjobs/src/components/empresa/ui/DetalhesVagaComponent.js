import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import { useListarPalavraChave } from '../../../hook/palavra/listarPalavra.hook';
import { Link, useParams } from 'react-router-dom';
import MenuVagaComponent from './menus/MenuVagaComponent';
import PalavrasChaveComponent from './PalavrasChaveComponent';
import CadastrarPalavrasChaveComponent from '../cadastrar/CadastrarPalavrasChaveComponent';

// Component para detalhar vaga na visão da empresa
const DetalhesVagaComponent = ({vaga, estudantes, encontrou, listarVag}) => {

  const [vagaTag, setVagaTag] = useState([]);
  const [estudantesTag, setEstudantesTag] = useState([]);
  const { id } = useParams();

  const [palavras, setPalavras] = useState([]);
  const { listarPalavraChave } = useListarPalavraChave();

  async function listar() {

    const response = await listarPalavraChave(id);
    setPalavras(response) 

  }

  useEffect(() => {

    setVagaTag([]);
    setEstudantesTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>⚐</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-corpo'>{vaga.cidade}</h5>
                                            <h5 className='curso fonte-corpo'>{
                                            vaga.curso == 'INFORMATICA' ? "Informática" : 
                                            vaga.curso == "EVENTOS" ? "Eventos" : 
                                            vaga.curso == "PLÁSTICOS" ? "Plásticos" : 
                                            "Mecânica"
                                            }</h5>
                                            
                                          </article>
                                          <article className='sobre-perfis'>
                                            <h3 className='fonte-titulo'>Detalhes</h3>
                                            {encontrou == true ? <div className='button-open-menu menu-usuario-vaga'>
                                              <MenuVagaComponent vaga={vaga} listarVag={listarVag} listarPal={listar}/> 
                                            </div> : ""}
                                            <p className='fonte-corpo'>{vaga.descricao}</p>
                                            <p className='fonte-corpo'><strong>Salário:</strong> {vaga.salario}</p>
                                            <p className='fonte-corpo'><strong>Idade mínima:</strong> {vaga.idadeMinima}</p>
                                          </article>
                                      </section>
                                  ])) 

    estudantes.forEach(e => {
    setEstudantesTag((oldEstudantesTag) => ([...oldEstudantesTag, 
                                    <section>
                                      <p className='fonte-corpo candidatos'><Link to={`/estudante/${e.id}`}>{e.nome}</Link></p>
                                    </section>
                                ]))
    });

  }, [vaga, estudantes, encontrou])

  useEffect(() => {

    listar();
  }, [])

  return (
    <section>
        {vagaTag}

        <article className='habilidade-component'>
          <h3 className='fonte-titulo'>Palavras chave</h3>
          <article className='habilidades-component'>
            <CadastrarPalavrasChaveComponent vaga={vaga} listarPal={listar}/>
            <PalavrasChaveComponent palavra={palavras} idVaga={id} encontrou={encontrou} listaPa={listar}/>
          </article>
        </article>

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Candidatos</h3>
          {estudantesTag}
        </article>

    </section>
  )
}

export default DetalhesVagaComponent