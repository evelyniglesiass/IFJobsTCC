import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarFormacao } from '../../../hook/formacao/cadastrarFormacao.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarFormacaoComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        nivel: '',
        instituicao: '',
        cidade: '',
        dataInicial: '',
        dataFinal: '',
        descricao: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroFormacao} = useCadastrarFormacao();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroFormacao(formInput.nivel, formInput.instituicao, formInput.cidade, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
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
                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Formação acadêmica</h2>
                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='nivel' placeholder="Nível" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='instituicao' placeholder="Nome da Instituição" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-editar cadastros-curriculo" name='cidade' placeholder="Cidade" onChange={handleChange}/>
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

export default CadastrarFormacaoComponent