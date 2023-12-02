import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirCurriculoComponent from '../../excluir/ExcluirCurriculoComponent';
import CurriculoEditarComponent from '../../editar/CurriculoEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuCurriculoComponent = ({curriculo}) => {

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
                    <ExcluirCurriculoComponent curriculo={curriculo}/>
                    <CurriculoEditarComponent curriculo={curriculo}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuCurriculoComponent