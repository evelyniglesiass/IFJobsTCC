import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirCursoComponent from '../../excluir/ExcluirCursoComponent';
import CursosEditarComponent from '../../editar/CursosEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuCursoComponent = ({curso}) => {

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
                    <ExcluirCursoComponent curso={curso}/>
                    <CursosEditarComponent cursos={curso}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuCursoComponent