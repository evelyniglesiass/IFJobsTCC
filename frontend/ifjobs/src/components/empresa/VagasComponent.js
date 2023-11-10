import React, { useEffect, useState } from 'react'
import '../../App.scss';
import { Link } from 'react-router-dom';

// Component de vagas
const VagasComponent = ({vagas}) => {

  const [vagasTag, setVagasTag] = useState([]);

  useEffect(() => {

    setVagasTag([]);
    
    vagas.forEach(v => {
      setVagasTag((oldVagasTag) => ([...oldVagasTag, 
                                        <section className='container-vaga'>
                                          <h2 className='titulo-vagas fonte-titulo'>{v.titulo}</h2>
                                          <p className='corpo-vagas fonte-corpo'>{v.descricao}</p>
                                          <article className='botao-vagas'>
                                              <Link className='btn btn-dark' to={"/detalhes/vaga"}>Visualizar</Link>        
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