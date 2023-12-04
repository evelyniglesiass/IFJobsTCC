import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import MenuPalavrasComponent from '../ui/menus/MenuPalavrasComponent';

// Component para exibir as palavras chaves cadastradas
const PalavrasChaveComponent = ({palavra, idVaga, encontrou, listaPa, acao}) => {

  const [palavrasChaveTag, setPalavrasChaveTag] = useState([]);

  useEffect(() => { 

    setPalavrasChaveTag([]);

    console.log(palavra)
    
    palavra.forEach(p => {
      setPalavrasChaveTag((oldPalavrasChaveTag) => ([...oldPalavrasChaveTag,
                                          <article className='cabecalho-cursos-exper'>
                                            <h6 className='fonte-corpo'>#️⃣ {p.palavra}</h6>
                                            <div className='menu-button-open'>
                                             {encontrou == true ? <MenuPalavrasComponent palavra={p} idVaga={idVaga} listaPa={listaPa}/> : "" }
                                            </div>
                                          </article>
                                        ]))
    });
                          
  }, [palavra, encontrou])

  return (
    <div className='container-cursos-exper'>
      {palavrasChaveTag}
    </div>
  )
}

export default PalavrasChaveComponent 