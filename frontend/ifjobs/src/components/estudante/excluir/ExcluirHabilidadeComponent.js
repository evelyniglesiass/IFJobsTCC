import '../../../App.scss';
import { useState } from 'react';
import { useExcluirHabilidade } from '../../../hook/habilidade/excluirHabilidade.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de exclusão de habilidade
const ExcluirHabilidadeComponent = ({ habilidade, listar }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { excluirHabilidade } = useExcluirHabilidade();

    async function onSubmit(event) {
        event.preventDefault();

        await excluirHabilidade(habilidade.id);
        listar()
    }

    return (
        <div>
            <button onClick={openModal} className='button-modal-open button-menu-li'>🗑️ Excluir</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja excluir sua habilidade?</h2>
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='habilidade' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirHabilidadeComponent