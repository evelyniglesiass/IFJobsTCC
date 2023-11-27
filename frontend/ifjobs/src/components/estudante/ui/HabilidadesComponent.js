import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import HabilidadeEditarComponent from '../editar/HabilidadeEditarComponent'
import ExcluirHabilidadeComponent from '../excluir/ExcluirHabilidadeComponent';

// Component para habilidades
const HabilidadesComponent = ({habilidades}) => {

  const [habilidadesTag, setHabilidadesTag] = useState([]);

  useEffect(() => { 

    setHabilidadesTag([]);
    
    habilidades.forEach(h => {
      setHabilidadesTag((oldHabilidadesTag) => ([...oldHabilidadesTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>➜ {h.descricao}</h6>
                                            <HabilidadeEditarComponent habilidade={h}/>
                                            <ExcluirHabilidadeComponent habilidade={h}/>
                                          </article>
                                        ]))
    });
                          
  }, [habilidades])

  return (
    <div className='container-cursos-exper'>
      {habilidadesTag}
    </div>
  )
}

export default HabilidadesComponent 