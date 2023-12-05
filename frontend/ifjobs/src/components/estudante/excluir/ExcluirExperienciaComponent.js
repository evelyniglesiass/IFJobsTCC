import '../../../App.scss';
import { useState } from 'react';
import { useExcluirExperiencia } from '../../../hook/experiencia/excluirExperiencia.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de exclusão de experiência
const ExcluirExperienciaComponent = ({ experiencia, listar }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { excluirExperiencia } = useExcluirExperiencia();

    async function onSubmit(event) {
        event.preventDefault();

        await excluirExperiencia(experiencia.id);
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


                <h2 className='titulo-modal'>Deseja excluir sua experiência?</h2>
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='experiencia' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirExperienciaComponent