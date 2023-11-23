import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarExperiencia } from '../../../hook/experiencia/cadastrarExperiencia.hook';
import DicasExperienciaComponent from '../../dicas/DicasExperienciaComponent';
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
        <div className='container-modal modal-cadastrar-exp'>
            <button onClick={openModal} className='button-modal-open'>➕</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                
                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Experiência profissional</h2>
                <DicasExperienciaComponent/>
                
                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='titulo' placeholder="Título" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='empresa' placeholder="Empresa" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='cargo' placeholder="Cargo" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" class="form-control" name='dataInicial'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" class="form-control" name='dataFinal'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <textarea type="textarea" class="form-control" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange}/>
                        </div>
                        
                        <button type='submit' class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                    </form>
                </div> 
            </Modal>
        </div>
    )
}

export default CadastrarExperienciaComponent