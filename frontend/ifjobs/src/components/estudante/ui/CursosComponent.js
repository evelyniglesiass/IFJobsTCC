import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import CursosEditarComponent from '../editar/CursosEditarComponent';
import ExcluiCursoComponent from '../excluir/ExcluirCursoComponent'
import * as moment from 'moment';
import MenuCursoComponent from './menus/MenuCursoComponent';

// Component para cursos
const CursosComponent = ({cursos, acao}) => {

  const [cursoTag, setCursoTag] = useState([]);

  useEffect(() => { 

    setCursoTag([]);
    
    if(cursos){
      cursos.forEach(c => {
        setCursoTag((oldCurTag) => ([...oldCurTag,
                                            <section className='cabecalho-cursos-exper'>
                                              <h4 className='titulos-cursos-exper fonte-titulo'>{c.descricao}</h4>
                                              <h6 className='titulos-cursos-exper fonte-corpo'>{c.instituicao}</h6>
                                              <div className='menu-button-open'>
                                              {acao == "editar" ?<MenuCursoComponent curso={c}/> : ""}
                                              </div>
                                              <h6 className='datas data-fim fonte-corpo'>{c.dataInicial != null ? moment(c.dataInicial).format("DD/MM/YYYY") : c.dataInicial} à {c.dataFinal != null ? moment(c.dataFinal).format("DD/MM/YYYY") : c.dataFinal}</h6>
                                              <p className='conteudo-cursos fonte-corpo'>{c.cargaHoraria}</p>
                                            </section>
                                          ]))
      });
    }
                          
  }, [cursos])

  return (
    <div className='container-cursos-exper'>
      {cursoTag}
    </div>
  )
}

export default CursosComponent 