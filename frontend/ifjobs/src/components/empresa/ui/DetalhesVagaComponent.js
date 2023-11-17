import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import EditarVagaButtonComponent from '../../ui/editar/EditarVagaButtonComponent';

// Component para detalhar vaga na visão da empresa
const DetalhesVagaComponent = ({vaga}) => {

  const [vagaTag, setVagaTag] = useState([]);

  useEffect(() => {

    setVagaTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>TL</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-titulo'>{vaga.cidade}</h5>
                                            <EditarVagaButtonComponent/>
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

        <article className='sobre-perfis'>
          <h3 className='fonte-titulo'>Estudantes</h3>
          <p className='fonte-corpo'>Nomes</p>
        </article>

    </section>
  )
}

export default DetalhesVagaComponent