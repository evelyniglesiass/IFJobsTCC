import '../../../App.scss';
import { useState } from 'react';
import { useEditarHabilidade } from '../../../hook/habilidade/editarHabilidade.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const HabilidadeEditarComponent = ({habilidade, listar}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        descricao: habilidade.descricao
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarHabilidade} = useEditarHabilidade();

    async function onSubmit(event){
        event.preventDefault();

        await editarHabilidade(formInput.descricao, habilidade.id);
        listar()
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

                <h2 className='titulo-modal'>Habilidade</h2>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>

                    <div className='txt-form-group'>
                        <input type="text" defaultValue={habilidade.descricao} class="form-control" name='descricao' placeholder="Habilidade" onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default HabilidadeEditarComponent