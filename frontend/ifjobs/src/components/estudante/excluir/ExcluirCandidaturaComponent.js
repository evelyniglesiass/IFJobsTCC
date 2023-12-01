import '../../../App.scss';
import { useState } from 'react';
import { useRemoverCandidatura } from '../../../hook/estudante/removerCandidatura.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const ExcluirCandidaturaComponent = ({candidatura}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {removerCandidatura} = useRemoverCandidatura();

    async function onSubmit(event){
        event.preventDefault();

        await removerCandidatura(candidatura.id);
        
    }

    return (
        <div className='container-modal-candidatura'>
            <button onClick={openModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Deletar candidatura</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja remover sua candidatura?</h2>                
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='candidatura' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirCandidaturaComponent