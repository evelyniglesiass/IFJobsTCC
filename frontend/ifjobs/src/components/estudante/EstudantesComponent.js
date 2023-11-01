import React from 'react'
import '../../App.scss';
import { Link } from 'react-router-dom';

// Component para exibir empresas cadastradas no feed
const EstudantesComponent = () => {
  return (
    <section className='container-geral-empresas'>
        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>

        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>

        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>

        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>

        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>

        <article className='container-empresa'>
            <h4 className='titulo-empresas fonte-titulo'><Link to={"/estudante"}>Estudante</Link>   </h4>
            <p className='corpo-empresas fonte-corpo'>It is a long established fact that a reader will be distracted making it look like readable English.</p>
        </article>
    </section>
  )
}

export default EstudantesComponent