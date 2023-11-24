import React, { useEffect, useState } from 'react'
import '../../../App.scss';

// Import de Components
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';

// Import toastify
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useListarExperiencia } from '../../../hook/experiencia/listarExperiencia.hook';
import { useListarCurso } from '../../../hook/curso/listarCurso.hook';
import { useListarFormacao } from '../../../hook/formacao/listarFormacao.hook';
import { useParams } from 'react-router-dom';

// Component para visualizar perfis de estudantes
const CurriculoComponent = ({estudante, curriculo}) => { 

  const [estudanteTag, setEstudanteTag] = useState([]); 
  const [curriculoTag, setCurriculoTag] = useState([]);
  const [sobreMimTag, setSobreMimTag] = useState([]);
  const [icone, setIcone] = useState("");

  useEffect(() => {

    setEstudanteTag([]);
    setCurriculoTag([]);
    setSobreMimTag([]);
    
    setEstudanteTag(() => ([
                            <section>
                              <h1 className='img-perfis'>{
                                estudante.nome != null ? estudante.nome.slice(0, 2).toUpperCase() : "👤"
                              }</h1>
                              <h2 className='titulo-perfil fonte-titulo'>{estudante.nome}</h2>
                              <h5 className='fonte-titulo'>{estudante.usuario}</h5>
                              <h5 className='curso fonte-titulo'>{estudante.nomeUsuario}</h5>
                              <h5 className='curso fonte-titulo'>{
                              estudante.curso == 'INFORMATICA' ? "Informática" : 
                              estudante.curso == "EVENTOS" ? "Eventos" : 
                              estudante.curso == "PLÁSTICOS" ? "Plásticos" : 
                              "Mecânica"
                              }</h5>
                            </section>
                          ]))
                  
    setCurriculoTag(() => ([
                            <section>
                              <h3 className='fonte-titulo fonte-sobre'>Objetivo</h3>
                              <p className='fonte-corpo'>{curriculo.resumo}</p> 
                            </section>
                          ]))

    setSobreMimTag(() => ([
                            <section>
                              <h3 className='fonte-titulo fonte-sobre'>Sobre mim</h3>
                              <p className='fonte-corpo'>{estudante.email}</p>
                              <p className='fonte-corpo'>{estudante.telefone}</p>
                              <p className='fonte-corpo'>{estudante.cidade}</p> 
                            </section>
                          ]))

  }, [estudante, curriculo])

  const [experiencia, setExperiencia] = useState([]);
  const [curso, setCurso] = useState([]);
  const [formacao, setFormacao] = useState([]);
  const { id } = useParams();

  const { listarExperiencia } = useListarExperiencia();
  const { listarCurso } = useListarCurso();
  const { listarFormacao } = useListarFormacao();

  useEffect(() => {
    async function listar() { 

      const response = await listarExperiencia(id);
      setExperiencia(response);

      const curResp = await listarCurso(id);
      setCurso(curResp);

      const forResp = await listarFormacao(id);
      setFormacao(forResp);

    }

    listar();
  }, [])

  return (
    <section>
        <article className='cabecalho-perfis'>
          {estudanteTag}
        </article>
        
        <article className='objetivo-curriculo'>
          {sobreMimTag}
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
          <article className='cursos-component'><CursosComponent cursos={curso}/></article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <article className='formacao-component'><FormacaoComponent formacoes={formacao}/></article>
        </article>
    </section>
  )
}

export default CurriculoComponent