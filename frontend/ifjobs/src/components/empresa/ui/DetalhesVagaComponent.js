import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import EditarDetalhesVagaComponent from '../editar/EditarDetalhesVagaComponent';

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
                                            <EditarDetalhesVagaComponent vaga={vaga}/>
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

    estudantes.forEach(e => {
    setEstudantesTag((oldEstudantesTag) => ([...oldEstudantesTag, 
                                    <section>
                                      <p className='fonte-corpo'>{e.nome}</p>
                                    </section>
                                ]))
    });

  }, [vaga, estudantes])

  return (
    <section>
        {vagaTag}

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Estudantes</h3>
          {estudantesTag}
        </article>

    </section>
  )
}

export default DetalhesVagaComponent