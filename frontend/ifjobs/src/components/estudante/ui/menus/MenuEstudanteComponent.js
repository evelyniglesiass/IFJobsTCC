import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirEstudanteComponent from '../../excluir/ExcluirEstudanteComponent';
import EstudanteEditarComponent from '../../editar/EstudanteEditarComponent';

Modal.setAppElement("#root");

// Component menu com ações referentes aos dados do estudante
const MenuEstudanteComponent = ({estudante, listarCur}) => {

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
                    <ExcluirEstudanteComponent />
                    <EstudanteEditarComponent estudante={estudante} listarCur={listarCur} close={closeModal}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuEstudanteComponent