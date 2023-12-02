import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirExperienciaComponent from '../../excluir/ExcluirExperienciaComponent';
import ExperienciasEditarComponent from '../../editar/ExperienciasEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuExperienciaComponent = ({experiencia}) => {

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
                    <ExcluirExperienciaComponent experiencia={experiencia}/>
                    <ExperienciasEditarComponent experiencia={experiencia}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuExperienciaComponent