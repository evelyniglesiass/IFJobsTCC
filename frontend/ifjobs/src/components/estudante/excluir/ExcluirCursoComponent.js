import '../../../App.scss';
import { useState } from 'react';
import { useExcluirCurso } from '../../../hook/curso/excluirCurso.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const ExcluirCursoComponent = ({curso}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirCurso} = useExcluirCurso();

    async function onSubmit(event){
        event.preventDefault();

        await excluirCurso(curso.id);
        
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


                <h2 className='titulo-modal'>Deseja excluir seu curso?</h2>                
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary' name='curso' id='botao-cadastro-modal'>Sim</button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirCursoComponent