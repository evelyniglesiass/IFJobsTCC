import '../../../App.scss';
import { useState } from 'react';
import { useEditarCurriculo } from '../../../hook/curriculo/editarCurriculo.hook';
import Modal from 'react-modal';
import DicasObjetivoComponent from '../../dicas/DicasObjetivoComponent';

Modal.setAppElement("#root");

// Component com inputs para edição de currículo com dicas
const EditarCurriculoComponent = ({ curriculo, listarCur }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        resumo: curriculo?.resumo
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
    }

    const { editarCurriculo } = useEditarCurriculo();

    async function onSubmit(event) {
        event.preventDefault();

        await editarCurriculo(formInput.resumo);
        listarCur()
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

                <h2 className='titulo-modal'>Currículo</h2>
                <DicasObjetivoComponent />
                <hr />
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>

                        <div className='txt-form-group'>
                            <textarea type="textarea" defaultValue={curriculo?.resumo} class="form-control" name='resumo' placeholder="Objetivo" maxLength={250} onChange={handleChange} />
                        </div>

                        <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default EditarCurriculoComponent