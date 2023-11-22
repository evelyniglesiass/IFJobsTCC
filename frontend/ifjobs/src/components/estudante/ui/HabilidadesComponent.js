import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para cursos
const HabilidadesComponent = ({habilidades}) => {

  const [habilidadesTag, setHabilidadesTag] = useState([]);

  useEffect(() => { 

    setHabilidadesTag([]);
    
    habilidades.forEach(h => {
      setHabilidadesTag((oldHabilidadesTag) => ([...oldHabilidadesTag,
                                            <h6 className='titulos-cursos-exper fonte-corpo'>{h.descricao}</h6>
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