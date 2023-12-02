import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import MenuIdiomaComponent from './menus/MenuIdiomaComponent';

// Component para idiomas
const IdiomasComponent = ({idioma, acao}) => {

  const [idiomasTag, setIdiomasTag] = useState([]);

  useEffect(() => { 

    setIdiomasTag([]);
    
    if(idioma){
      idioma.forEach(i => {
        setIdiomasTag((oldIdiomasTag) => ([...oldIdiomasTag,
                                            <article className='cabecalho-cursos-exper'>
                                              <h6 className='fonte-corpo'>📖 {i.descricao}</h6>
                                              <div className='menu-button-open'>
                                              {acao == "editar" ? <MenuIdiomaComponent idioma={i}/> : ""}
                                              </div>
                                            </article>
                                          ]))
      });
    }
                          
  }, [idioma])

  return (
    <div className='container-cursos-exper'>
      {idiomasTag}
    </div>
  )
}

export default IdiomasComponent 