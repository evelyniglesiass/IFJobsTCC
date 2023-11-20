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
        salario: '',
        idadeMinima: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastrarVaga} = useCadastrarVaga();

    async function onSubmit(event){
        event.preventDefault();

        await cadastrarVaga(formInput.titulo, formInput.cidade, formInput.descricao, formInput.salario, formInput.idadeMinima);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>➕</button>
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
                        <input type="text" class="form-control" name='titulo' placeholder="Título" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="text" class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <textarea type="text" class="form-control" name='descricao' placeholder="Descrição" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" class="form-control" name='salario' placeholder="Salário" onChange={handleChange}/>
                    </div>

                    <div class="txt-form-group"> 
                        <input type="number" class="form-control" name='idadeMinima' placeholder="Idade mínima" onChange={handleChange}/>
                    </div>

                    {/* <div class="txt-form-group"> 
                        <input type="" class="form-control" name='curso' placeholder="Curso" />
                    </div> */}
                    
                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>
            </Modal>
        </div>
    )
}

export default CadastrarVagaComponent