import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import { Link } from 'react-router-dom';

// Component para exibir empresas cadastradas no feed
const EmpresasComponent = ({empresas}) => {

    const [empresasTag, setEmpresasTag] = useState([]);

    useEffect(() => {

        setEmpresasTag([]);
        
        empresas.forEach(e => {
            setEmpresasTag((oldEmpresasTag) => ([...oldEmpresasTag, 
                                                    <article className='container-empresa'>
                                                        <h4 className='titulo-empresas fonte-titulo'><Link to={`/empresa/${e.id}`}>{e.nome}</Link></h4>
                                                        <p className='corpo-empresas fonte-corpo'>{e.descricao}</p>
                                                    </article>
                                                ]))
        });

    }, [empresas])


  return (
    <section className='container-geral-empresas'> 
        {empresasTag}
    </section>
  )
}

export default EmpresasComponent