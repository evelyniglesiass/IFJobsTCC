import '../../../App.scss';
import { useState } from 'react';
import { useExcluirVaga } from '../../../hook/vagas/excluirVaga.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const ExcluirVagaComponent = ({vaga}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirVaga} = useExcluirVaga();

    async function onSubmit(event){
        event.preventDefault();

        await excluirVaga(vaga.id);
        
    }

    return (
        <div >
            <button onClick={openModal} className='button-modal-open button-menu' >🗑 Deletar</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja excluir sua vaga?</h2>                
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

export default ExcluirVagaComponent