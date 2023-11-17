import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';

// Import toastify
import 'react-toastify/dist/ReactToastify.min.css'; 
import EditarCurriculoButtonComponent from '../ui/editar/EditarCurriculoButtonComponent';
import { useListarExperiencia } from '../../hook/experiencia/listarExperiencia.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Component de perfil do estudante com botão de editar
const PerfilCurriculoComponent = ({estudante, curriculo}) => { 

  const [estudanteTag, setEstudanteTag] = useState([]);
  const [curriculoTag, setCurriculoTag] = useState([]);

  useEffect(() => {

    // const icone = estudante.nome;
    // icone = icone.slice(0, 2);
    // {icone.toUpperCase()}

    console.log(estudante)
    console.log(curriculo)

    setEstudanteTag([]);
    setCurriculoTag([]);
    
    setEstudanteTag(() => ([
                            <section>
                              <h1 className='img-perfis'>EV</h1>
                              <h2 className='titulo-perfil fonte-titulo'>{estudante.nome}</h2>
                              <h5 className='curso fonte-titulo'>Curso</h5>
                              <p className='sociais fonte-titulo'>{estudante.email}</p>
                            </section>
                          ]))

    setCurriculoTag(() => ([
                            <section>
                              <h3 className='fonte-titulo'>Resumo</h3>
                              <p className='fonte-corpo'>{curriculo.resumo}</p> 
                            </section>
                          ]))

  }, [estudante, curriculo])

  const [experiencia, setExperiencia] = useState([]);
  const [user] = useGlobalUser();

  const { listarExperiencia } = useListarExperiencia();

  useEffect(() => {
    async function listar() { 

      const response = await listarExperiencia(user.id);
      setExperiencia(response);

    }

    listar();
  }, [])

  return (
    <section>
        <article className='cabecalho-perfis'>
          {estudanteTag}
          <EditarCurriculoButtonComponent/>
        </article>
        
        <article className='objetivo-curriculo'>
          {curriculoTag}
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <div className='experiencia-component'><ExperienciasComponent experiencias={experiencia}/></div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <article className='cursos-component'><CursosComponent/></article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <article className='formacao-component'><FormacaoComponent/></article>
        </article>   
    </section>
  )
}

export default PerfilCurriculoComponent