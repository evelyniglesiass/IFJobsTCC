import '../../../App.scss';
import { useState } from 'react';
import { useExcluirEmpresa } from '../../../hook/empresa/excluirEmpresa.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const ExcluirEmpresaComponent = ({empresa}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirEmpresa} = useExcluirEmpresa();

    async function onSubmit(event){
        event.preventDefault();

        await excluirEmpresa(empresa);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Deletar</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">


                <h2 className='titulo-modal'>Deseja excluir sua conta?</h2>                
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='empresa' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirEmpresaComponent