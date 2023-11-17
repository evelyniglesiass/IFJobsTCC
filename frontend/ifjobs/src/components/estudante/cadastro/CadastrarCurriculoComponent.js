import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarCurriculo } from '../../../hook/curriculo/cadastrarCurriculo.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarCurriculoComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        resumo: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroCurriculo} = useCadastrarCurriculo();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroCurriculo(formInput.resumo);
        
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

                <h2 className='titulo-modal'>Cursos e certificados</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>

                    <div className='txt-form-group'>
                        <textarea type="textarea" class="form-control" name='resumo' placeholder="Resumo" maxLength={250} onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default CadastrarCurriculoComponent