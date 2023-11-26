import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import CursosEditarComponent from '../editar/CursosEditarComponent';
import ExcluiCursoComponent from '../excluir/ExcluirCursoComponent'
import * as moment from 'moment';

// Component para cursos
const CursosComponent = ({cursos}) => {

  const [cursoTag, setCursoTag] = useState([]);

  useEffect(() => { 

    setCursoTag([]);
    
    cursos.forEach(c => {
      setCursoTag((oldCurTag) => ([...oldCurTag,
                                          <section className='cabecalho-cursos-exper'>
                                            <h4 className='titulos-cursos-exper fonte-titulo'>{c.descricao}</h4>
                                            <h6 className='titulos-cursos-exper fonte-corpo'>{c.instituicao}</h6>
                                            <article>
                                              <h6 className='data-inicio fonte-corpo'>{c.dataInicial != null ? moment(c.dataInicial).format("DD/MM/YYYY") : c.dataInicial}</h6>
                                              <h6 className='data-fim fonte-corpo'>{c.dataFinal != null ? moment(c.dataFinal).format("DD/MM/YYYY") : c.dataFinal}</h6> 
                                            </article> 
                                            <CursosEditarComponent cursos={c}/>
                                            <ExcluiCursoComponent/>
                                            <p className='conteudo-cursos fonte-corpo'>{c.descricao}</p>
                                          </section>
                                        ]))
    });
                          
  }, [cursos])

  return (
    <div className='container-cursos-exper'>
      {cursoTag}
    </div>
  )
}

export default CursosComponent 