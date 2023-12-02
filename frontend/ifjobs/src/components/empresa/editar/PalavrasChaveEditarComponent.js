import '../../../App.scss';
import { useState } from 'react';
import { useEditarPalavra, useEditarPalavraChave } from '../../../hook/palavra/editarPalavra.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const PalavrasChaveEditarComponent = ({palavra, idVaga, listaPa}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        palavra: palavra.palavra
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarPalavraChave} = useEditarPalavraChave();

    async function onSubmit(event){
        event.preventDefault();

        await editarPalavraChave(formInput.palavra, palavra.id, idVaga);
        listaPa()
    }

    return (
        <div>
            <button onClick={openModal} className='button-modal-open button-menu-li'>📝 Editar</button>
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
                        <input type="text" defaultValue={palavra.palavra} class="form-control" name='palavra' placeholder="Palavra" onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default PalavrasChaveEditarComponent