import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import ExperienciasEditarComponent from '../editar/ExperienciasEditarComponent';

// Component para experiência profissional
const ExperienciasComponent = ({experiencias}) => { 

  const [experienciaTag, setExperienciaTag] = useState([]);

  useEffect(() => { 

    setExperienciaTag([]);
    
    experiencias.forEach(e => {
      setExperienciaTag((oldExpTag) => ([...oldExpTag,
                                <section className='cabecalho-cursos-exper'>
                                  <h4 className='titulos-cursos-exper fonte-titulo'>{e.cargo}</h4>
                                  <h6 className='titulos-cursos-exper fonte-corpo'>{e.empresa}</h6>
                                  <article className='datas'>
                                    <h6 className='data-inicio fonte-corpo'>{e.dataInicial}</h6>
                                    <h6 className='data-fim fonte-corpo'>{e.dataFinal}</h6>
                                  </article>
                                  <p className='conteudo-experiencias'>{e.descricao}</p>
                                  <ExperienciasEditarComponent experiencia={e}/>
                                </section>
                            ]))
    });
                          
  }, [experiencias])

  return (
    <div className='container-cursos-exper'>
      {experienciaTag}
    </div> 
  )
}

export default ExperienciasComponent