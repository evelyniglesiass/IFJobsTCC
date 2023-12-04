import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirFormacaoComponent from '../../excluir/ExcluirFormacaoComponent';
import FormacaoEditarComponent from '../../editar/FormacaoEditarComponent';

Modal.setAppElement("#root");

// Component menu com ações referentes aos dados da formação
const MenuFormacaoComponent = ({formacao, listar}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal} className='button-open-menu' >•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <div className='button-menu-li'>
                    <ExcluirFormacaoComponent formacao={formacao} listar={listar}/>
                    <FormacaoEditarComponent formacao={formacao} listar={listar}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuFormacaoComponent