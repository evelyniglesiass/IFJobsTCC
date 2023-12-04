import '../../../App.scss';
import { useState } from 'react';
import { useExcluirFormacao } from '../../../hook/formacao/excluirFormacao.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de exclusão de formação
const ExcluirFormacaoComponent = ({formacao, listar}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirFormacao} = useExcluirFormacao();

    async function onSubmit(event){
        event.preventDefault();

        await excluirFormacao(formacao.id);
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


                <h2 className='titulo-modal'>Deseja excluir sua formação?</h2>                
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='formacao' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirFormacaoComponent