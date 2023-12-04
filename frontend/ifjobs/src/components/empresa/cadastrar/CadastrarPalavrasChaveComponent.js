import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarPalavraChave } from '../../../hook/palavra/cadastrarPalavra.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de cadastro de palavras chave
const CadastrarPalavrasChaveComponent = ({vaga, listarPal}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        palavra: '',
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastrarPalavraChave} = useCadastrarPalavraChave();

    async function onSubmit(event){
        event.preventDefault();

        await cadastrarPalavraChave(formInput.palavra, vaga.id);
        listarPal()
    }

    return (
        <div className='container-modal modal-cadastrar-for' >
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>✚</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Palavra chave</h2>                
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>

                    <div className='txt-form-group'>
                        <input type="text" class="form-control" name='palavra' placeholder="Palavra" onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default CadastrarPalavrasChaveComponent