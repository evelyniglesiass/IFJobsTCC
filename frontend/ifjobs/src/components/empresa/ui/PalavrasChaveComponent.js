import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import PalavrasChaveEditarComponent from '../editar/PalavrasChaveEditarComponent';
import ExcluirPalavraChaveComponent from '../excluir/ExcluirPalavraChaveComponent';
import MenuPalavrasComponent from '../ui/menus/MenuPalavrasComponent';

// Component para cursos
const PalavrasChaveComponent = ({palavra, idVaga, encontrou}) => {

  const [palavrasChaveTag, setPalavrasChaveTag] = useState([]);

  useEffect(() => { 

    setPalavrasChaveTag([]);
    console.log(encontrou)
    
    palavra.forEach(p => {
      setPalavrasChaveTag((oldPalavrasChaveTag) => ([...oldPalavrasChaveTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>#️⃣ {p.palavra}</h6>
                                            <div className='menu-button-open'>
                                              <MenuPalavrasComponent palavra={p} idVaga={idVaga}/>
                                            </div>
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