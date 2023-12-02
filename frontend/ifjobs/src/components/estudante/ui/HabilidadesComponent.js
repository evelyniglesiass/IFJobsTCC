import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import MenuHabilidadeComponent from './menus/MenuHabilidadeComponent';

// Component para habilidades
const HabilidadesComponent = ({habilidades, acao}) => {

  const [habilidadesTag, setHabilidadesTag] = useState([]);

  useEffect(() => { 

    setHabilidadesTag([]);
    
    if(habilidades){
      habilidades.forEach(h => {
        setHabilidadesTag((oldHabilidadesTag) => ([...oldHabilidadesTag,
                                            <article className='cabecalho-cursos-exper'>
                                              <h6 className='fonte-corpo'>⭐ {h.descricao}</h6>
                                              <div className='menu-button-open'>
                                              {acao == "editar" ? <MenuHabilidadeComponent habilidade={h}/> : ""}
                                              </div>
                                            </article>
                                          ]))
      });
    }  
                          
  }, [habilidades])

  return (
    <div className='container-cursos-exper'>
      {habilidadesTag}
    </div>
  )
}

export default HabilidadesComponent 