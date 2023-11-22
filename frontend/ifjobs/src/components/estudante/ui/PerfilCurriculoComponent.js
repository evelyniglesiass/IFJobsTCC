import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Import de Components
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';

// Import toastify
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useListarExperiencia } from '../../../hook/experiencia/listarExperiencia.hook';
import useGlobalUser from '../../../context/usuario/user.context';

import ExperienciasEditarComponent from '../editar/ExperienciasEditarComponent';
import CadastrarExperienciaComponent from '../cadastro/CadastrarExperienciaComponent';
import CadastrarCurriculoComponent from '../cadastro/CadastrarCurriculoComponent';
import CurriculoEditarComponent from '../editar/CurriculoEditarComponent';
import CursosEditarComponent from '../editar/CursosEditarComponent';
import FormacaoEditarComponent from '../editar/FormacaoEditarComponent';
import EstudanteEditarComponent from '../editar/EstudanteEditarComponent';
import { useListarFormacao } from '../../../hook/formacao/listarFormacao.hook';
import { useListarCurso } from '../../../hook/curso/listarCurso.hook';
import CadastrarCursoComponent from '../cadastro/CadastrarCursoComponent';
import CadastrarFormacaoComponent from '../cadastro/CadastrarFormacaoComponent';


// Component de perfil do estudante com botão de editar
const PerfilCurriculoComponent = ({estudante, curriculo}) => { 

  const [estudanteTag, setEstudanteTag] = useState([]);
  const [curriculoTag, setCurriculoTag] = useState([]);
  const [sobreMimTag, setSobreMimTag] = useState([]);


  useEffect(() => {

    setEstudanteTag([]);
    setCurriculoTag([]);
    setSobreMimTag([]);
    
    setEstudanteTag(() => ([
                            <section>
                              <h1 className='img-perfis'>EV</h1>
                              <h2 className='titulo-perfil fonte-titulo'>{estudante.nome}</h2>
                              <h5 className='curso fonte-titulo'>{estudante.nomeUsuario}</h5>
                              <h5 className='curso fonte-titulo'>Curso{/*estudante.curso*/}</h5>
                            </section>
                          ]))

    setCurriculoTag(() => ([
                            <section>
                              <h3 className='fonte-titulo'>Resumo</h3>
                              <p className='fonte-corpo'>{curriculo.resumo}</p> 
                            </section>
                          ]))

    setSobreMimTag(() => ([
                            <section>
                              <h3 className='fonte-titulo'>Sobre mim</h3>
                              <p className='fonte-corpo'>{estudante.email}</p>
                              <p className='fonte-corpo'>{estudante.telefone}</p>
                              <p className='fonte-corpo'>{estudante.cidade}</p> 
                            </section>
                          ]))

  }, [estudante, curriculo])

  const [experiencia, setExperiencia] = useState([]);
  const [curso, setCurso] = useState([]);
  const [formacao, setFormacao] = useState([]);
  const [user] = useGlobalUser();

  const { listarExperiencia } = useListarExperiencia();
  const { listarCurso } = useListarCurso();
  const { listarFormacao } = useListarFormacao();

  useEffect(() => {
    async function listar() { 

      const response = await listarExperiencia(user.id);
      setExperiencia(response);

      const curResp = await listarCurso(user.id);
      setCurso(curResp);

      const forResp = await listarFormacao(user.id);
      setFormacao(forResp);

    }

    listar();
  }, [])

  return (
    <section>
        <article className='cabecalho-perfis'>
          {estudanteTag}
          <div className='btn-editar-estudante'><EstudanteEditarComponent/></div>
        </article>

        <article className='objetivo-curriculo'>
          {sobreMimTag}
        </article>
        
        <article className='objetivo-curriculo'>
          {curriculoTag}
          <CadastrarCurriculoComponent/>
          <CurriculoEditarComponent/>
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <CadastrarExperienciaComponent/>
          <ExperienciasEditarComponent/>

          <div className='experiencia-component'>
            <ExperienciasComponent experiencias={experiencia}/>
          </div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <CadastrarCursoComponent/>
          <CursosEditarComponent/>

          <article className='cursos-component'>
            <CursosComponent cursos={curso}/>
          </article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <CadastrarFormacaoComponent/>
          <FormacaoEditarComponent/>

          <article className='formacao-component'>
            <FormacaoComponent formacoes={formacao}/>
          </article>
        </article>   
    </section>
  )
}

export default PerfilCurriculoComponent