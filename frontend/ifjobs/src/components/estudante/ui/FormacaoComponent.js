import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import * as moment from 'moment';
import MenuFormacaoComponent from './menus/MenuFormacaoComponent';

// Component para formação acadêmica
const FormacaoComponent = ({formacoes, acao}) => {

  const [formacaoTag, setFormacaoTag] = useState([]);

  useEffect(() => { 

    setFormacaoTag([]);
    
    if(formacoes){
      formacoes.forEach(f => {
        setFormacaoTag((oldForTag) => ([...oldForTag,
                                    <section className='cabecalho-cursos-exper'>
                                      <h4 className='titulos-cursos-exper fonte-titulo'>
                                      {
                                        f.nivel == 'FUNDAMENTAL' ? "Ensino Fundamental" : 
                                        f.nivel == "MEDIO" ? "Ensino Médio" : 
                                        f.nivel == "TECNICO" ? "Ensino Técnico" :
                                        f.nivel == "MEDIO_TECNICO" ? "Ensino Médio Técnico" : 
                                        "Ensino Superior"
                                      }
                                      </h4>
                                      <h6 className='titulos-cursos-exper fonte-corpo'>{f.instituicao}</h6>
                                      <div className='menu-button-open'>
                                      {acao == "editar" ? <MenuFormacaoComponent formacao={f}/> : ""}
                                      </div>
                                      <h6 className='datas data-fim fonte-corpo'>{f.dataInicial != null ? moment(f.dataInicial).format("DD/MM/YYYY") : f.dataInicial} à {f.dataFinal != null ? moment(f.dataFinal).format("DD/MM/YYYY") : f.dataFinal}</h6>
                                      <p className='conteudo-formacao fonte-corpo'>{f.cidade}</p>
                                      <p className='conteudo-formacao fonte-corpo'>{f.descricao}</p>
                                    </section>
                                      ]))
      });
    } 
                          
  }, [formacoes])

  return (
    <div className='container-cursos-exper'>
      {formacaoTag}
    </div> 
  )
}

export default FormacaoComponent