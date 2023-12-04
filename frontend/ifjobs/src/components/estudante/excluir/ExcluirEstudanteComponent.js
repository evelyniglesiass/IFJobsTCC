import '../../../App.scss';
import { useState } from 'react';
import { useExcluirEstudante } from '../../../hook/estudante/excluirEstudante.hook';
import { Link } from "react-router-dom";
import { useLogout } from '../../../hook/logout/logout.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de exclusão de estudante
const ExcluirEstudanteComponent = () => {


    const [modalIsOpen, setIsOpen] = useState(false);
    const {fazerLogout} = useLogout();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const {excluirEstudante} = useExcluirEstudante();

    async function onSubmit(event){
        event.preventDefault(); 
    }

    async function onClick(event){
        event.preventDefault();
    
        await excluirEstudante();
        await fazerLogout();
    }

    return (
        <div>
            <button onClick={openModal} className='button-modal-open button-menu-li'>🗑️ Excluir minha conta</button>
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
                            <button type='submit' className='txt btn btn-primary btn-excluir-perfil' name='estudante' id='botao-cadastro-modal' onClick={onClick}><Link to={"/"}>Sim</Link></button>
                            <button onClick={closeModal} className='txt btn btn-primary' id='botao-cadastro-modal'>Cancelar</button>
                        </div>

                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default ExcluirEstudanteComponent