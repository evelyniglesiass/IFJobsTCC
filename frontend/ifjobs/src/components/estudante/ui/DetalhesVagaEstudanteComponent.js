import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import { useCadastrarCandidatura } from '../../../hook/estudante/cadastrarCandidatura.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component para detalhar vaga na visão do estudante
const DetalhesVagaEstudanteComponent = ({vaga}) => {
  let vagaLocal = vaga
  const [vagaTag, setVagaTag] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {cadastroCandidatura} = useCadastrarCandidatura();

    async function onSubmit(event){
      event.preventDefault();

      await cadastroCandidatura(vaga);
  }

  useEffect(() => {

    setVagaTag([]);

    setVagaTag((oldVagaTag) => ([...oldVagaTag, 
                                      <section>
                                          <article className='cabecalho-perfis'>
                                            <h1 className='img-perfis'>⚐</h1>
                                            <h2 className='titulo-perfil fonte-titulo'>{vaga.titulo}</h2>
                                            <h5 className='curso fonte-titulo'>{vaga.cidade}</h5>
                                            <h5 className='curso fonte-titulo'> {
                                            vaga.curso == 'INFORMATICA' ? "Informática" : 
                                            vaga.curso == "EVENTOS" ? "Eventos" : 
                                            vaga.curso == "PLÁSTICOS" ? "Plásticos" : 
                                            "Mecânica"
                                            }
                                            </h5>
                                          </article>
                                          <article className='sobre-perfis'>
                                            <h3 className='fonte-titulo'>Detalhes</h3>
                                            <p className='fonte-corpo'>{vaga.descricao}</p>
                                            <p className='fonte-corpo'><strong>Salário:</strong> {vaga.salario}</p>
                                            <p className='fonte-corpo'><strong>Idade mínima:</strong> {vaga.idadeMinima}</p>
                                          </article>

                                          <div className='container-modal modal-cadastrar-cur'>
                                          
                                            <button onClick={openModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Candidatar-se</button>
                                            
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                contentLabel="Example Modal"
                                                overlayClassName="modal-overlay"
                                                className="modal-content">

                                                <button onClick={closeModal} className='button-fechar'>X</button>

                                                <h2 className='titulo-modal'>Deseja confirmar sua candidatura?</h2>                
                                                <hr/>
                                                <div className='container-cursos-exper'>
                                                  <form onSubmit={onSubmit}>
                                                    <button type='submit' className='txt btn btn-primary' id='botao-cadastro-modal'>Sim</button>
                                                    <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                                                  </form>
                                                </div>

                                            </Modal>
                                          </div>
                                      </section>
                                  ]))

  }, [vagaLocal])

  return (
    <section>
      {vagaTag}
    </section>
  )
}

export default DetalhesVagaEstudanteComponent