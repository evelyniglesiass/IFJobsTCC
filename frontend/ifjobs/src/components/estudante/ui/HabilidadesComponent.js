import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para cursos
const HabilidadesComponent = ({habilidades}) => {

  const [habilidadesTag, setHabilidadesTag] = useState([]);

  useEffect(() => { 

    setHabilidadesTag([]);
    
    habilidades.forEach(h => {
      setHabilidadesTag((oldHabilidadesTag) => ([...oldHabilidadesTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>➜ {h.descricao}</h6>
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