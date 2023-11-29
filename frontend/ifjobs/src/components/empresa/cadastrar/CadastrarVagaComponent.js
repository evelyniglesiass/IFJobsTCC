import '../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import { useCadastrarVaga } from '../../../hook/vagas/cadastrarVaga.hook';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarVagaComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        titulo: '',
        cidade: '',
        descricao: '',
        salario: 0.0,
        idadeMinima: 0,
        curso: 0
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastrarVaga} = useCadastrarVaga();

    async function onSubmit(event){
        event.preventDefault();
        console.log(formInput)
        await cadastrarVaga(formInput.titulo, formInput.descricao, true, formInput.salario, formInput.idadeMinima, formInput.cidade, formInput.curso, "2023-01-01");
        
    }

    return (
        <div className='container-modal modal-cadastrar-vaga'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>✚</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Cadastre sua vaga!</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div class="txt-form-group"> 
                        <input type="text" className="form-control" name='titulo' placeholder="Título" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="text" className="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <textarea type="text" className="form-control" name='descricao' placeholder="Descrição" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" className="form-control" name='salario' placeholder="Salário" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" className="form-control" name='idadeMinima' placeholder="Idade mínima" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group">
                        <select className='form-control' name='curso' onChange={handleChange}>
                            <option value="" disabled selected>Curso</option>
                            <option value="0">Informática</option>
                            <option value="1">Eventos</option>
                            <option value="2">Mecânica</option>
                            <option value="3">Plásticos</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>
            </Modal>
        </div>
    )
}

export default CadastrarVagaComponent