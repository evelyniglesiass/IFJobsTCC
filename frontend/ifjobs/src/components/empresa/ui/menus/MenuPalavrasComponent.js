import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirPalavraChaveComponent from '../../excluir/ExcluirPalavraChaveComponent';
import PalavrasChaveEditarComponent from '../../editar/PalavrasChaveEditarComponent';

Modal.setAppElement("#root");

// Component menu com ações referentes aos dados da palavra chave
const MenuPalavrasComponent = ({palavra, idVaga, listaPa}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal} className='button-open-menu inline-type' >•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <div className='button-menu-li'>
                    <ExcluirPalavraChaveComponent palavra={palavra} listaPa={listaPa}/>
                    <PalavrasChaveEditarComponent palavra={palavra} idVaga={idVaga} listaPa={listaPa}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuPalavrasComponent