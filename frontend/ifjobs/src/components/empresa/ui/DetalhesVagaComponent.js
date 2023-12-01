import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import EditarDetalhesVagaComponent from '../editar/EditarDetalhesVagaComponent';
import ExcluirVagaComponent from '../excluir/ExcluirVagaComponent';
import useGlobalUser from '../../../context/usuario/user.context';
import { useListarPalavraChave } from '../../../hook/palavra/listarPalavra.hook';
import { Link } from 'react-router-dom';

// Component para detalhar vaga na visão da empresa
const DetalhesVagaComponent = ({vaga, estudantes}) => {

  const [vagaTag, setVagaTag] = useState([]);
  const [estudantesTag, setEstudantesTag] = useState([]);
  // const [palavras, setPalavras] = useState([]);
  // const [user] = useGlobalUser();


  useEffect(() => {

    setVagaTag([]);
    setEstudantesTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>⚐</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-titulo'>{vaga.cidade}</h5>
                                            <h5 className='curso fonte-titulo'>{
                                            vaga.curso == 'INFORMATICA' ? "Informática" : 
                                            vaga.curso == "EVENTOS" ? "Eventos" : 
                                            vaga.curso == "PLÁSTICOS" ? "Plásticos" : 
                                            "Mecânica"
                                            }</h5>
                                          </article>
                                          <article className='sobre-perfis'>
                                            <h3 className='fonte-titulo'>Detalhes</h3>
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

  }, [vaga, estudantes])

  // const { listarPalavrasChave } = useListarPalavraChave();

  // useEffect(() => {
  //   async function listar() {

  //     const response = await listarPalavrasChave(user.id);
      
  //     setVagas(response) 

  //   }

  //   listar();
  // }, [])

  return (
    <section>
        {vagaTag}
        <ExcluirVagaComponent/>

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Candidatos</h3>
          {estudantesTag}
        </article>

        {/* <article className='palavras-vaga'>
          <h3 className='fonte-titulo'>Palavras chave</h3>
          {estudantesTag}
        </article> */}

    </section>
  )
}

export default DetalhesVagaComponent