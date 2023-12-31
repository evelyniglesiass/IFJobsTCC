import '../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import { useExcluirPalavraChave } from '../../../hook/palavra/excluirPalavra.hook';

Modal.setAppElement("#root");

// Componente para excluir palavra chave
const ExcluirPalavraChaveComponent = ({ palavra, listaPa }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { excluirPalavraChave } = useExcluirPalavraChave();

    async function onSubmit(event) {
        event.preventDefault();

        await excluirPalavraChave(palavra.id);
        listaPa()
    }

    return (
        <div >
            <button onClick={openModal} className='button-modal-open button-menu-li'>🗑️ Excluir</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja excluir sua palavra chave?</h2>
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='vaga' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirPalavraChaveComponent