import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import ExcluirIdiomaComponent from '../excluir/ExcluirIdiomaComponent';
import IdiomaEditarComponent from '../editar/IdiomaEditarComponent';

// Component para idiomas
const IdiomasComponent = ({idioma}) => {

  const [idiomasTag, setIdiomasTag] = useState([]);

  useEffect(() => { 

    setIdiomasTag([]);
    
    idioma.forEach(i => {
      setIdiomasTag((oldIdiomasTag) => ([...oldIdiomasTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>➜ {i.descricao}</h6>
                                            <IdiomaEditarComponent idioma={i}/>
                                            <ExcluirIdiomaComponent idioma={i}/>
                                          </article>
                                        ]))
    });
                          
  }, [idioma])

  return (
    <div className='container-cursos-exper'>
      {idiomasTag}
    </div>
  )
}

export default IdiomasComponent 