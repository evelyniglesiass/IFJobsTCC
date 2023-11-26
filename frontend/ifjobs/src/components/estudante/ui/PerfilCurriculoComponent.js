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

import CadastrarExperienciaComponent from '../cadastro/CadastrarExperienciaComponent';
import CadastrarCurriculoComponent from '../cadastro/CadastrarCurriculoComponent';
import CurriculoEditarComponent from '../editar/CurriculoEditarComponent';
import CursosEditarComponent from '../editar/CursosEditarComponent';
import FormacaoEditarComponent from '../editar/FormacaoEditarComponent';
import EstudanteEditarComponent from '../editar/EstudanteEditarComponent';
import { useListarFormacao } from '../../../hook/formacao/listarFormacao.hook';
import { useListarCurso } from '../../../hook/curso/listarCurso.hook';
import { useListarHabilidade } from '../../../hook/habilidade/listarHabilidade.hook';
import CadastrarCursoComponent from '../cadastro/CadastrarCursoComponent';
import CadastrarFormacaoComponent from '../cadastro/CadastrarFormacaoComponent';
import HabilidadesComponent from './HabilidadesComponent';
import CadastrarHabilidadeComponent from '../cadastro/CadastrarHabilidadeComponent'
import ExcluirCurriculoComponent from '../excluir/ExcluirCurriculoComponent';


// Component de perfil do estudante com botão de editar
const PerfilCurriculoComponent = ({estudante, curriculo}) => { 

  const [estudanteTag, setEstudanteTag] = useState([]);
  const [curriculoTag, setCurriculoTag] = useState([]);
  const [sobreMimTag, setSobreMimTag] = useState([]);

  const [c, setC] = useState("");

  useEffect(() => {

    setEstudanteTag([]);
    setCurriculoTag([]);
    setSobreMimTag([]);

    setC(curriculo.resumo)
    
    setEstudanteTag(() => ([
                            <section>
                              <h1 className='img-perfis'>{
                                estudante.nome != null ? estudante.nome.slice(0, 2).toUpperCase() : "👤"
                              }</h1>
                              <h2 className='titulo-perfil fonte-titulo'>{estudante.nome}</h2>
                              <h5 className='curso fonte-titulo'>{estudante.nomeUsuario}</h5>
                              <h5 className='curso fonte-titulo'>{
                              estudante.curso == 'INFORMATICA' ? "Informática" : 
                              estudante.curso == "EVENTOS" ? "Eventos" : 
                              estudante.curso == "PLÁSTICOS" ? "Plásticos" : 
                              "Mecânica"
                              }</h5>
                            </section>
                          ]))

    if (curriculo != null) {
      setCurriculoTag(() => ([
        <section>
          <p className='fonte-corpo'>{curriculo != null ? curriculo.resumo : ""}</p> 
        </section>
      ]))
    }

    setSobreMimTag(() => ([
                            <section>
                              <p className='fonte-corpo'>{estudante.email}</p>
                              <p className='fonte-corpo'>{estudante.telefone}</p>
                              <p className='fonte-corpo'>{estudante.cidade}</p> 
                            </section>
                          ]))

  }, [estudante, curriculo])

  const [experiencia, setExperiencia] = useState([]);
  const [curso, setCurso] = useState([]);
  const [formacao, setFormacao] = useState([]);
  const [habilidade, setHabilidade] = useState([]);
  const [user] = useGlobalUser();

  const { listarExperiencia } = useListarExperiencia();
  const { listarCurso } = useListarCurso();
  const { listarFormacao } = useListarFormacao();
  const { listarHabilidade } = useListarHabilidade();

  useEffect(() => {
    async function listar() { 

      if (curriculo != null) {
        console.log(curriculo)
        const response = await listarExperiencia(user.id);
        setExperiencia(response);

        const curResp = await listarCurso(user.id);
        setCurso(curResp);

        const forResp = await listarFormacao(user.id);
        setFormacao(forResp);

        const habResp = await listarHabilidade(user.id);
        setHabilidade(habResp);
      }

    }

    listar();
  }, [])

  return (
    <section>
        <article className='cabecalho-perfis'>
          {estudanteTag}
          <EstudanteEditarComponent estudante={estudante}/>
          {/* <div className='btn-editar-estudante'> */}
          {/* </div> */}
        </article>

        <article className='objetivo-curriculo'>
          <h3 className='fonte-titulo fonte-sobre'>Sobre mim</h3>
          {sobreMimTag}
        </article>
        
        <article className='objetivo-curriculo'>
          <h3 className='fonte-titulo fonte-sobre'>Objetivo</h3>
          {curriculoTag}
          <CadastrarCurriculoComponent/>
          <CurriculoEditarComponent curriculo={curriculo}/>
          <ExcluirCurriculoComponent curriculo={curriculo}/>
        </article>

        <article className='experiencia-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Experiência Profissional</h3>
          <CadastrarExperienciaComponent/>
          <div className='experiencia-component'>
            {curriculo != null ? <ExperienciasComponent experiencias={experiencia}/> : "" }
          </div>
        </article>

        <article className='curso-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Cursos e Certificados</h3>
          <CadastrarCursoComponent/>
          <article className='cursos-component'>
            {curriculo != null ? <CursosComponent cursos={curso}/> : "" }
          </article>
        </article>

        <article className='formacao-curriculo'>
          <h3 className='titulos-perfis fonte-titulo'>Formação Acadêmica</h3>
          <CadastrarFormacaoComponent/>
          <article className='formacao-component'>
            {curriculo != null ? <FormacaoComponent formacoes={formacao}/> : "" }
          </article>
        </article>

        <article className='habilidade-component'>
          <h3 className='titulos-perfis fonte-titulo'>Habilidades e conhecimentos</h3>
          <CadastrarHabilidadeComponent/>
          <article className='habilidades-component'>
            {curriculo != null ? <HabilidadesComponent habilidades={habilidade}/> : "" }
          </article>
        </article>   

        <article className='habilidade-component'>
          <h3 className='titulos-perfis fonte-titulo'>Idiomas</h3>
          <article className='habilidades-component'>
          </article>
        </article>  
    </section>
  )
}

export default PerfilCurriculoComponent