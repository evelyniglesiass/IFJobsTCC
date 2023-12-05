import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarCandidatura } from '../../../hook/estudante/cadastrarCandidatura.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de cadastro de candidatura
const CadastrarCandidaturaComponent = ({ vaga }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { cadastrarCandidatura } = useCadastrarCandidatura();

    async function onSubmit(event) {
        event.preventDefault();

        await cadastrarCandidatura(vaga.id);

    }

    return (
        <div >
            <button onClick={openModal} className='txt btn btn-primary btn-candidatura'>Candidatar-se</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja confirmar sua candidatura?</h2>
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='vaga' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default CadastrarCandidaturaComponent