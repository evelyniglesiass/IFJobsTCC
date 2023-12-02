import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirIdiomaComponent from '../../excluir/ExcluirIdiomaComponent';
import IdiomaEditarComponent from '../../editar/IdiomaEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuIdiomaComponent = ({idioma}) => {

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
                className="modal-content modal-menus">

                <div className='button-menu-li'>
                    <ExcluirIdiomaComponent idioma={idioma}/>
                    <IdiomaEditarComponent idioma={idioma}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuIdiomaComponent