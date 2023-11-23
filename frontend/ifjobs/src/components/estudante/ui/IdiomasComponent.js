import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para idiomas
const IdiomasComponent = ({idioma}) => {

  const [idiomasTag, setIdiomasTag] = useState([]);

  useEffect(() => { 

    setIdiomasTag([]);
    
    idioma.forEach(i => {
      setIdiomasTag((oldIdiomasTag) => ([...oldIdiomasTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>➜ {i.descricao}</h6>
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