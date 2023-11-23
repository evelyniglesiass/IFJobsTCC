import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import CursosEditarComponent from '../editar/CursosEditarComponent';

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
                                              <h6 className='data-inicio fonte-corpo'>{c.dataInicial}</h6>
                                              <h6 className='data-fim fonte-corpo'>{c.dataFinal}</h6>
                                            </article>
                                            <p className='conteudo-cursos fonte-corpo'>{c.descricao}</p>
                                            <CursosEditarComponent cursos={c}/>
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