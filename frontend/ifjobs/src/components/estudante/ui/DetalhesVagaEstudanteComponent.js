import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import CadastrarCandidaturaComponent from '../cadastro/CadastrarCandidaturaComponent';

// Component para detalhar vaga na visão do estudante
const DetalhesVagaEstudanteComponent = ({vaga}) => {
  let vagaLocal = vaga
  const [vagaTag, setVagaTag] = useState([]);

  useEffect(() => {

    setVagaTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>⚐</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-titulo'>{vaga.cidade}</h5>
                                            <h5 className='curso fonte-titulo'> {
                                            vaga.curso == 'INFORMATICA' ? "Informática" : 
                                            vaga.curso == "EVENTOS" ? "Eventos" : 
                                            vaga.curso == "PLÁSTICOS" ? "Plásticos" : 
                                            "Mecânica"
                                            }
                                            </h5>
                                          </article>
                                          <article className='sobre-perfis'>
                                            <h3 className='fonte-titulo'>Detalhes</h3>
                                            <p className='fonte-corpo'>{vaga.descricao}</p>
                                            <p className='fonte-corpo'><strong>Salário:</strong> {vaga.salario}</p>
                                            <p className='fonte-corpo'><strong>Idade mínima:</strong> {vaga.idadeMinima}</p>
                                          </article>
                                      </section>
                                  ]))

  }, [vagaLocal])

  return (
    <section>
      {vagaTag}
      <CadastrarCandidaturaComponent vaga={vaga}/>
    </section>
  )
}

export default DetalhesVagaEstudanteComponent