import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import EditarDetalhesVagaComponent from '../editar/EditarDetalhesVagaComponent';
import { Link } from 'react-router-dom';

// Component para detalhar vaga na visão da empresa
const DetalhesVagaComponent = ({vaga, estudantes}) => {

  const [vagaTag, setVagaTag] = useState([]);
  const [estudantesTag, setEstudantesTag] = useState([]);

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

  return (
    <section>
        {vagaTag}

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Candidatos</h3>
          {estudantesTag}
        </article>

    </section>
  )
}

export default DetalhesVagaComponent