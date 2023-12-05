import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import ExperienciasComponent from './ExperienciasComponent';
import CursosComponent from './CursosComponent';
import FormacaoComponent from './FormacaoComponent';
import 'react-toastify/dist/ReactToastify.min.css';
import { useListarExperiencia } from '../../../hook/experiencia/listarExperiencia.hook';
import useGlobalUser from '../../../context/usuario/user.context';
import CadastrarExperienciaComponent from '../cadastro/CadastrarExperienciaComponent';
import CadastrarCurriculoComponent from '../cadastro/CadastrarCurriculoComponent';
import { useListarFormacao } from '../../../hook/formacao/listarFormacao.hook';
import { useListarCurso } from '../../../hook/curso/listarCurso.hook';
import { useListarHabilidade } from '../../../hook/habilidade/listarHabilidade.hook';
import { useListarIdioma } from '../../../hook/idioma/listarIdioma.hook'
import CadastrarCursoComponent from '../cadastro/CadastrarCursoComponent';
import CadastrarFormacaoComponent from '../cadastro/CadastrarFormacaoComponent';
import HabilidadesComponent from './HabilidadesComponent';
import CadastrarHabilidadeComponent from '../cadastro/CadastrarHabilidadeComponent'
import CadastrarIdiomaComponent from '../cadastro/CadastrarIdiomaComponent';
import IdiomasComponent from '../ui/IdiomasComponent';
import MenuCurriculoComponent from './menus/MenuCurriculoComponent';
import MenuEstudanteComponent from './menus/MenuEstudanteComponent';

// Component de perfil do estudante com botões de editar
const PerfilCurriculoComponent = ({ estudante, curriculo, listarCur }) => {

  const [estudanteTag, setEstudanteTag] = useState([]);
  const [curriculoTag, setCurriculoTag] = useState([]);
  const [sobreMimTag, setSobreMimTag] = useState([]);

  const [experiencia, setExperiencia] = useState([]);
  const [curso, setCurso] = useState([]);
  const [formacao, setFormacao] = useState([]);
  const [habilidade, setHabilidade] = useState([]);
  const [idioma, setIdioma] = useState([]);
  const [user] = useGlobalUser();

  const { listarExperiencia } = useListarExperiencia();
  const { listarCurso } = useListarCurso();
  const { listarFormacao } = useListarFormacao();
  const { listarHabilidade } = useListarHabilidade();
  const { listarIdioma } = useListarIdioma();

  async function listar() {

    const response = await listarExperiencia(user.id);
    setExperiencia(response);

    const curResp = await listarCurso(user.id);
    setCurso(curResp);

    const forResp = await listarFormacao(user.id);
    setFormacao(forResp);

    const habResp = await listarHabilidade(user.id);
    setHabilidade(habResp);

    const idiResp = await listarIdioma(user.id);
    setIdioma(idiResp);

  }

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
        <h5 className='curso fonte-corpo'>@{estudante.nomeUsuario}</h5>
        <h5 className='curso fonte-corpo'>{
          estudante.curso === 'INFORMATICA' ? "Informática" :
            estudante.curso === "EVENTOS" ? "Eventos" :
              estudante.curso === "PLASTICOS" ? "Plásticos" :
                "Mecânica"
        }</h5>
        <div className='menu-button-open'>

        </div>
      </section>
    ]))

    if (curriculo) {
      setCurriculoTag(() => ([
        <section>
          <p className='fonte-corpo'>{curriculo.length != 0 ? curriculo.resumo : ""}</p>
        </section>
      ]))
    }

    setSobreMimTag(() => ([
      <section>
        <p className='fonte-corpo'><strong>Email: </strong>{estudante.email}</p>
        <p className='fonte-corpo'><strong>Telefone: </strong>{estudante.telefone ? tel(estudante.telefone) : ""}</p>
        <p className='fonte-corpo'><strong>Cidade: </strong>{estudante.cidade}</p>
        <p className='fonte-corpo'><strong>Idade: </strong>{estudante.idade} anos</p>
      </section>
    ]))

  }, [estudante, curriculo])

  useEffect(() => {
    listar();
  }, [])

  return (
    <section>
      <article className='cabecalho-perfis'>
        {estudanteTag}
        <div className='menu-button-open menu-usuario'>
          <MenuEstudanteComponent estudante={estudante} listarCur={listarCur} />
        </div>
      </article>

      <article className='objetivo-curriculo'>
        <h3 className='fonte-titulo fonte-sobre'>Sobre mim</h3>
        {sobreMimTag}
      </article>

      <article className='objetivo-curriculo'>
        <h3 className='fonte-titulo fonte-sobre'>Objetivo</h3>
        {curriculoTag}
        {curriculo ? <MenuCurriculoComponent curriculo={curriculo} listarCur={listarCur} listar={listar} /> : <CadastrarCurriculoComponent listarCur={listarCur} />}
      </article>

      <article className='experiencia-curriculo'>
        <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
        <CadastrarExperienciaComponent listar={listar} />
        <div className='experiencia-component'>
          <ExperienciasComponent experiencias={experiencia} acao={"editar"} listar={listar} />
        </div>
      </article>

      <article className='curso-curriculo'>
        <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
        <CadastrarCursoComponent listar={listar} />
        <article className='cursos-component'>
          <CursosComponent cursos={curso} acao={"editar"} listar={listar} />
        </article>
      </article>

      <article className='formacao-curriculo'>
        <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
        <CadastrarFormacaoComponent listar={listar} />
        <article className='formacao-component'>
          <FormacaoComponent formacoes={formacao} acao={"editar"} listar={listar} />
        </article>
      </article>

      <article className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Habilidades e Conhecimentos</h3>
        <CadastrarHabilidadeComponent listar={listar} />
        <article className='habilidades-component'>
          <HabilidadesComponent habilidades={habilidade} acao={"editar"} listar={listar} />
        </article>
      </article>

      <article className='habilidade-component'>
        <h3 className='titulos-perfis fonte-titulo'>Idiomas</h3>
        <CadastrarIdiomaComponent listar={listar} />
        <article className='habilidades-component'>
          <IdiomasComponent idioma={idioma} acao={"editar"} listar={listar} />
        </article>
      </article>
    </section>
  )
}

export default PerfilCurriculoComponent