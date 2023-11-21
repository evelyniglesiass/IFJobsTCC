import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para formação acadêmica
const FormacaoComponent = ({formacoes}) => {

  const [formacaoTag, setFormacaoTag] = useState([]);

  useEffect(() => { 

    setFormacaoTag([]);
    
    formacoes.forEach(f => {
      setFormacaoTag((oldForTag) => ([...oldForTag,
                                  <section className='cabecalho-cursos-exper'>
                                    <h4 className='titulos-cursos-exper fonte-titulo'>{f.descricao}</h4>
                                    <h6 className='titulos-cursos-exper fonte-corpo'>{f.instituicao}</h6>
                                    <article>
                                      <h6 className='data-inicio fonte-corpo'>{f.dataInicial}</h6>
                                      <h6 className='data-fim fonte-corpo'>{f.dataFinal}</h6>
                                    </article>
                                    <p className='conteudo-formacao fonte-corpo'>{f.cidade}</p>
                                  </section>
                                    ]))
    });
                          
  }, [formacoes])

  return (
    <div className='container-cursos-exper'>
      {formacaoTag}
    </div> 
  )
}

export default FormacaoComponent