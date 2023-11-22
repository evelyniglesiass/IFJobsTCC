import React from 'react'
import '../../../App.scss';
import { useState } from 'react';
import { useEditarVaga } from '../../../hook/vagas/editarVaga.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Import de Components

// Component com inputs para editar vaga
const EditarDetalhesVagaComponent = ({vaga}) => {

  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        titulo: vaga.titulo,
        cidade: vaga.cidade,
        descricao: vaga.descricao,
        salario: vaga.salario,
        idadeMinima: vaga.idadeMinima,
        curso: vaga.curso
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarVaga} = useEditarVaga();

    async function onSubmit(event){
        event.preventDefault();

        await editarVaga(formInput.titulo, formInput.cidade, formInput.descricao, formInput.salario, formInput.idadeMinima, formInput.curso);
        
    }

  return (
    <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>📝</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Edite sua vaga!</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div class="txt-form-group"> 
                        <input type="text" value={vaga.titulo} class="form-control" name='titulo' placeholder="Título" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="text" value={vaga.cidade} class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <textarea type="text" value={vaga.descricao} class="form-control" name='descricao' placeholder="Descrição" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" value={vaga.salario} class="form-control" name='salario' placeholder="Salário" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" value={vaga.idadeMinima} class="form-control" name='idadeMinima' placeholder="Idade mínima" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group">
                        <select value={vaga.curso} className='form-control' name='curso' onChange={handleChange}>
                            <option value="" disabled selected>Curso</option>
                            <option value="0">Informática</option>
                            <option value="1">Eventos</option>
                            <option value="2">Mecânica</option>
                            <option value="3">Plásticos</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>
            </Modal>
        </div>
  )
}

export default EditarDetalhesVagaComponent