import '../../../App.scss';
import { useState } from 'react';
import { useExcluirVaga } from '../../../hook/vagas/excluirVaga.hook';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

// Component para excluir vagas
const ExcluirVagaComponent = ({vaga}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirVaga} = useExcluirVaga();

    async function onClick(event){
        event.preventDefault();

        await excluirVaga(vaga.id);
        
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


                <h2 className='titulo-modal'>Deseja excluir sua vaga?</h2>                
                <div className='container-cursos-exper'>
                    <form >

                        <div className='txt-form-group'>
                            <button type='submit' className='txt btn btn-primary btn-excluir-perfil' name='vaga' id='botao-cadastro-modal' onClick={onClick}><Link to={"/perfil"}>Sim</Link></button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirVagaComponent