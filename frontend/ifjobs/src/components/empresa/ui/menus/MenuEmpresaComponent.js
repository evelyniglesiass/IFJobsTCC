import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirEmpresaComponent from '../../excluir/ExcluirEmpresaComponent';
import EditarEmpresaComponent from '../../editar/EmpresaEditarComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const MenuEmpresaComponent = ({empresa, listarEmp}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open' id='menu-empresa'>•••</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <div >
                    <ExcluirEmpresaComponent />
                    <EditarEmpresaComponent empresa={empresa} listarEmp={listarEmp}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuEmpresaComponent