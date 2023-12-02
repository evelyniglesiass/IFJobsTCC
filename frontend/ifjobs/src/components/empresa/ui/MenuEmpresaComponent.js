import '../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirEmpresaComponent from '../excluir/ExcluirEmpresaComponent';
import EditarEmpresaComponent from '../editar/EmpresaEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuEmpresaComponent = ({empresa}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open'>•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <div >
                    <ExcluirEmpresaComponent empresa={empresa}/>
                    <EditarEmpresaComponent empresa={empresa}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuEmpresaComponent