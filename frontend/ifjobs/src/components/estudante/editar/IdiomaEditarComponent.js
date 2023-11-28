import '../../../App.scss';
import { useState } from 'react';
import { useEditarIdioma } from '../../../hook/idioma/editarIdioma.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const IdiomaEditarComponent = ({idioma}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        descricao: idioma.descricao
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarIdioma} = useEditarIdioma();

    async function onSubmit(event){
        event.preventDefault();
        console.log(idioma.id)
        await editarIdioma(formInput.descricao, idioma.id);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>✎</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Idioma</h2>                
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>

                    <div className='txt-form-group'>
                        <input type="text" defaultValue={idioma.descricao} class="form-control" name='descricao' placeholder="Idioma" onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default IdiomaEditarComponent