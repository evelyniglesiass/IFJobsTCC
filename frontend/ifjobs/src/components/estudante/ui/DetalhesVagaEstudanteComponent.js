import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import CadastrarCandidaturaComponent from '../cadastro/CadastrarCandidaturaComponent';
import ExcluirCandidaturaComponent from '../excluir/ExcluirCandidaturaComponent';
import { useListarPalavraChave } from '../../../hook/palavra/listarPalavra.hook';
import PalavrasChaveComponent from '../../empresa/ui/PalavrasChaveComponent';
import { useParams } from 'react-router-dom';

// Component para detalhar vaga na visão do estudante
const DetalhesVagaEstudanteComponent = ({ vaga, encontrou }) => {

  let vagaLocal = vaga
  const [vagaTag, setVagaTag] = useState([]);
  const [encontrouTag, setEncontrouTag] = useState([])
  const { id } = useParams();

  useEffect(() => {

    setVagaTag([]);

    setEncontrouTag(encontrou)

    setVagaTag((oldVagaTag) => ([...oldVagaTag,
    <section>
      <article className='cabecalho-perfis'>
        <h1 className='img-perfis'>⚐</h1>
        <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
        <h5 className='curso fonte-corpo'>{vaga.cidade}</h5>
        <h5 className='curso fonte-corpo'> {
          vaga.curso == 'INFORMATICA' ? "Informática" :
            vaga.curso == "EVENTOS" ? "Eventos" :
              vaga.curso == "PLASTICOS" ? "Plásticos" :
                "Mecânica"
        }
        </h5>
      </article>

      <article className='sobre-perfis'>

        <h3 className='fonte-titulo titulo-pe'>Detalhes</h3>
        <p className='fonte-corpo'>{vaga.descricao}</p>
        <p className='fonte-corpo'><strong>Salário: </strong>R${vaga.salario}</p>
        <p className='fonte-corpo'><strong>Idade mínima:</strong> {vaga.idadeMinima}</p>

      </article>
    </section>
    ]))

  }, [vagaLocal, encontrou])

  const [palavras, setPalavras] = useState([]);
  const { listarPalavraChave } = useListarPalavraChave();

  async function listar() {

    const respPal = await listarPalavraChave(id);
    setPalavras(respPal)

  }

  useEffect(() => {

    listar();
  }, [])

  return (
    <section>
      {vagaTag}
      <article className='habilidade-component'>
        <h3 className='fonte-titulo titulo-pe'>Palavras chave</h3>
        <article className='habilidades-component'>
          <PalavrasChaveComponent palavra={palavras} encontrou={false} />
        </article>
      </article>
      <article className='botao-candidatura'>
        {encontrouTag != true ? <CadastrarCandidaturaComponent vaga={vaga} /> : <ExcluirCandidaturaComponent candidatura={vaga} />}
      </article>
    </section>
  )
}

export default DetalhesVagaEstudanteComponent