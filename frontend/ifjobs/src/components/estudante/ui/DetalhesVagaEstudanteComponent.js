import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para detalhar vaga na visão do estudante
const DetalhesVagaEstudanteComponent = ({vaga}) => {

  const [vagaTag, setVagaTag] = useState([]);

  useEffect(() => {

    setVagaTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>TL</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-titulo'>{vaga.cidade}</h5>
                                          </article>
                                          <article className='sobre-perfis'>
                                            <h3 className='fonte-titulo'>Detalhes</h3>
                                            <p className='fonte-corpo'>{vaga.descricao}</p>
                                            <p className='fonte-corpo'>Salário: {vaga.salario}</p>
                                            <p className='fonte-corpo'>Idade mínima: {vaga.idadeMinima}</p>
                                          </article>
                                      </section>
                                  ]))

  }, [vaga])

  return (
    <section>
      {vagaTag}
    </section>
  )
}

export default DetalhesVagaEstudanteComponent