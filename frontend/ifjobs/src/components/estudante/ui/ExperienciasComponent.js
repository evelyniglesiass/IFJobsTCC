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
                                    <h6 className='datas data-fim fonte-corpo'>{e.dataInicial != null ? moment(e.dataInicial).format("DD/MM/YYYY") : e.dataInicial} a {e.dataFinal != null ? moment(e.dataFinal).format("DD/MM/YYYY") : e.dataFinal}</h6>
                                    <p className='conteudo-experiencias'>{e.descricao}</p>
                                    <ExperienciasEditarComponent experiencia={e}/>
                                    <ExcluirExperienciaComponent experiencia={e}/>
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