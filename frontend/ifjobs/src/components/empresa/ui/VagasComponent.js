import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import { Link } from 'react-router-dom';
import EditarDetalhesVagaComponent from '../editar/EditarDetalhesVagaComponent';

// Component de vagas
const VagasComponent = ({vagas, acao}) => {

  const [vagasTag, setVagasTag] = useState([]);

  useEffect(() => {

    setVagasTag([]);
    
    vagas.forEach(v => {
      setVagasTag((oldVagasTag) => ([...oldVagasTag, 
                                        <section className='container-vaga'>
                                          <h2 className='titulo-vagas fonte-titulo'>{v.titulo}</h2>
                                          {acao == "editar" ? <EditarDetalhesVagaComponent vaga={v}/> : ""}
                                          <p className='corpo-vagas fonte-corpo'>{v.descricao}</p>
                                          <article className='botao-vagas'>
                                            <Link className='btn btn-dark' to={`/detalhes/vaga/${v.id}`}>Visualizar</Link>        
                                          </article>
                                        </section>
                                    ]))
    });

  }, [vagas])

  return (
    <div className='container-geral-vagas'>
      {vagasTag}
    </div>    
  )
}

export default VagasComponent