import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarCurriculo } from '../../../hook/curriculo/cadastrarCurriculo.hook';
import DicasObjetivoComponent from '../../dicas/DicasObjetivoComponent';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarCurriculoComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        resumo: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroCurriculo} = useCadastrarCurriculo();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroCurriculo(formInput.resumo);
        
    }

    return (
        <div className='container-modal modal-cadastrar-cur'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>✚</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Currículo</h2>
                <DicasObjetivoComponent/>
                
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>

                    <div className='txt-form-group'>
                        <textarea type="textarea" class="form-control" name='resumo' placeholder="Resumo" maxLength={250} onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default CadastrarCurriculoComponent