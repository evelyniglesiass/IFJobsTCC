import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarExperiencia } from '../../../hook/experiencia/cadastrarExperiencia.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarExperienciaComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        titulo: '',
        empresa: '',
        cargo: '',
        dataInicial: '',
        dataFinal: '',
        descricao: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroExperiencia} = useCadastrarExperiencia();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroExperiencia(formInput.titulo, formInput.empresa, formInput.cargo, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open'>➕</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h2 className='titulo-modal'>Experiência profissional</h2>
                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='titulo' placeholder="Título" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='empresa' placeholder="Empresa" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='cargo' placeholder="Cargo" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" class="form-editar cadastros-curriculo" name='dataInicial'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" class="form-editar cadastros-curriculo" name='dataFinal'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <textarea type="textarea" class="form-editar cadastros-curriculo" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange}/>
                        </div>
                        
                        <button type='submit' className='button-modal'>Salvar</button>
                    </form>
                </div> 
            </Modal>
        </div>
    )
}

export default CadastrarExperienciaComponent