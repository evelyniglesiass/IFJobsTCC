import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirVagaComponent from '../../excluir/ExcluirVagaComponent';
import EditarDetalhesVagaComponent from '../../editar/EditarDetalhesVagaComponent';
import CadastrarPalavrasChaveComponent from '../../cadastrar/CadastrarPalavrasChaveComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuVagaComponent = ({vaga, listarVag, listarPal}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal} className='button-modal-open' id='menu-vaga'>•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <div >
                    <ExcluirVagaComponent vaga={vaga}/>
                    <EditarDetalhesVagaComponent vaga={vaga} listarVag={listarVag}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuVagaComponent