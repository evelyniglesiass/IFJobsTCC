import '../../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import ExcluirHabilidadeComponent from '../../excluir/ExcluirHabilidadeComponent';
import HabilidadeEditarComponent from '../../editar/HabilidadeEditarComponent';

Modal.setAppElement("#root");

// Component menu com ações referentes aos dados da habilidade
const MenuHabilidadeComponent = ({habilidade, listar}) => {

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
                    <ExcluirHabilidadeComponent habilidade={habilidade} listar={listar}/>
                    <HabilidadeEditarComponent habilidade={habilidade} listar={listar}/>
                </div>

            </Modal>
        </div>
    )
}

export default MenuHabilidadeComponent