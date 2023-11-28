import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import ExperienciasEditarComponent from '../editar/ExperienciasEditarComponent';
import ExcluirExperienciaComponent from '../excluir/ExcluirExperienciaComponent'
import * as moment from 'moment';

// Component para experiência profissional
const ExperienciasComponent = ({experiencias}) => { 

  const [experienciaTag, setExperienciaTag] = useState([]);

  useEffect(() => { 

    setExperienciaTag([]);
    
    if(experiencias){
      
      experiencias.forEach(e => {
        setExperienciaTag((oldExpTag) => ([...oldExpTag,
                                  <section className='cabecalho-cursos-exper'>
                                    <h4 className='titulos-cursos-exper fonte-titulo'>{e.cargo}</h4>
                                    <h6 className='titulos-cursos-exper fonte-corpo'>{e.empresa}</h6>
                                    <article className='datas'>
                                      <h6 className='data-inicio fonte-corpo'>{e.dataInicial != null ? moment(e.dataInicial).format("DD/MM/YYYY") : e.dataInicial}</h6>
                                      <h6 className='data-fim fonte-corpo'>{e.dataFinal != null ? moment(e.dataFinal).format("DD/MM/YYYY") : e.dataFinal}</h6>
                                    </article>
                                    <ExperienciasEditarComponent experiencia={e}/>
                                    <ExcluirExperienciaComponent experiencia={e}/>
                                    <p className='conteudo-experiencias'>{e.descricao}</p>
                                  </section>
                              ]))
      });

    }
                          
  }, [experiencias])

  return (
    <div className='container-cursos-exper'>
      {experienciaTag}
    </div> 
  )
}

export default ExperienciasComponent