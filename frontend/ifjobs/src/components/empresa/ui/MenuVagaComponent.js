import '../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirVagaComponent from '../excluir/ExcluirVagaComponent';
import EditarDetalhesVagaComponent from '../editar/EditarDetalhesVagaComponent';
import CadastrarPalavrasChaveComponent from '../cadastrar/CadastrarPalavrasChaveComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuVagaComponent = ({vaga}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open' >•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <div >
                    <ExcluirVagaComponent vaga={vaga}/>
                    <EditarDetalhesVagaComponent vaga={vaga}/>
                    <CadastrarPalavrasChaveComponent vaga={vaga}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuVagaComponent