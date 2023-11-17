import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import { Link } from 'react-router-dom';

// Component para exibir empresas cadastradas no feed
const EstudantesComponent = ({estudantes}) => { 

    const [estudantesTag, setEstudantesTag] = useState([]);

    useEffect(() => {

        setEstudantesTag([]);
        
        estudantes.forEach(e => {
            setEstudantesTag((oldEstudantesTag) => ([...oldEstudantesTag, 
                                                    <article className='container-empresa'>
                                                        <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>{e.nome}</Link>   </h4>
                                                        <p className='corpo-empresas fonte-corpo'>{e.email}</p>
                                                    </article>
                                                    ]))
        });

    }, [estudantes])

  return (
    <section className='container-geral-empresas'>
        {estudantesTag}
    </section>
  )
}

export default EstudantesComponent