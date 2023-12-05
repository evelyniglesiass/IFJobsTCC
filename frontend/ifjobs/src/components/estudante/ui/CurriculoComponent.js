import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';
import 'react-toastify/dist/ReactToastify.min.css';
import { useListarExperiencia } from '../../../hook/experiencia/listarExperiencia.hook';
import { useListarCurso } from '../../../hook/curso/listarCurso.hook';
import { useListarFormacao } from '../../../hook/formacao/listarFormacao.hook';
import { useParams } from 'react-router-dom';
import { useListarHabilidade } from '../../../hook/habilidade/listarHabilidade.hook';
import { useListarIdioma } from '../../../hook/idioma/listarIdioma.hook';
import IdiomasComponent from './IdiomasComponent';
import HabilidadesComponent from './HabilidadesComponent';

// Component para mostrar curriculos
const CurriculoComponent = ({ estudante, curriculo }) => {

  const [estudanteTag, setEstudanteTag] = useState([]);
  const [curriculoTag, setCurriculoTag] = useState([]);
  const [sobreMimTag, setSobreMimTag] = useState([]);

  useEffect(() => {

    function tel(v) {
      v = v.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d)(\d{4})$/, "$1-$2");
      return v;
    }

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
        <h5 className='curso fonte-corpo'>@{estudante.nomeUsuario}</h5>
        <h5 className='curso fonte-corpo'>{
          estudante.curso == 'INFORMATICA' ? "Informática" :
            estudante.curso == "EVENTOS" ? "Eventos" :
              estudante.curso == "PLASTICOS" ? "Plásticos" :
                "Mecânica"
        }</h5>
      </section>
    ]))

    setCurriculoTag(() => ([
      <section>
        <h3 className='fonte-titulo fonte-sobre'>Objetivo</h3>
        <p className='fonte-corpo'>{curriculo != null ? curriculo.resumo : ""}</p>
      </section>
    ]))

    setSobreMimTag(() => ([
      <section>
        <h3 className='fonte-titulo fonte-sobre'>Sobre mim</h3>
        <p className='fonte-corpo'><strong>Email: </strong><a style={{ color: '#146869' }} href={`mailto:${estudante.email}`}>{estudante.email}</a></p>
        <p className='fonte-corpo'><strong>Telefone: </strong>{estudante.telefone ? tel(estudante.telefone) : ""}</p>
        <p className='fonte-corpo'><strong>Cidade: </strong>{estudante.cidade}</p>
        <p className='fonte-corpo'><strong>Idade: </strong>{estudante.idade} anos</p>
      </section>
    ]))

  }, [estudante, curriculo])

  const [experiencia, setExperiencia] = useState([]);
  const [curso, setCurso] = useState([]);
  const [formacao, setFormacao] = useState([]);
  const [habilidade, setHabilidade] = useState([]);
  const [idioma, setIdioma] = useState([]);
  const { id } = useParams();

  const { listarExperiencia } = useListarExperiencia();
  const { listarCurso } = useListarCurso();
  const { listarFormacao } = useListarFormacao();
  const { listarHabilidade } = useListarHabilidade();
  const { listarIdioma } = useListarIdioma();

  useEffect(() => {
    async function listar() {

      const response = await listarExperiencia(id);
      setExperiencia(response);

      const curResp = await listarCurso(id);
      setCurso(curResp);

      const forResp = await listarFormacao(id);
      setFormacao(forResp);

      const habResp = await listarHabilidade(id);
      setHabilidade(habResp);

      const idiResp = await listarIdioma(id);
      setIdioma(idiResp);

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
        <div className='experiencia-component'><ExperienciasComponent experiencias={experiencia} /></div>
      </article>

      <article className='curso-curriculo'>
        <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
        <article className='cursos-component'><CursosComponent cursos={curso} /></article>
      </article>

      <article className='formacao-curriculo'>
        <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
        <article className='formacao-component'><FormacaoComponent formacoes={formacao} /></article>
      </article>

      <article className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Habilidades e conhecimentos</h3>
        <article className='habilidades-component'>
          <HabilidadesComponent habilidades={habilidade} />
        </article>
      </article>

      <article className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Idiomas</h3>
        <article className='habilidades-component'>
          <IdiomasComponent idioma={idioma} />
        </article>
      </article>
    </section>
  )
}

export default CurriculoComponent