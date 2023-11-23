import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Component para cursos
const PalavrasChaveComponent = ({palavra}) => {

  const [palavrasChaveTag, setPalavrasChaveTag] = useState([]);

  useEffect(() => { 

    setPalavrasChaveTag([]);
    
    palavra.forEach(p => {
      setPalavrasChaveTag((oldPalavrasChaveTag) => ([...oldPalavrasChaveTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>➜ {p.palavra}</h6>
                                          </article>
                                        ]))
    });
                          
  }, [palavra])

  return (
    <div className='container-cursos-exper'>
      {palavrasChaveTag}
    </div>
  )
}

export default PalavrasChaveComponent 