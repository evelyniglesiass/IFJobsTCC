import '../../../App.scss';
import { useState } from 'react';
import { useEditarFormacao } from '../../../hook/formacao/editarFormacao.hook';
import Modal from 'react-modal';
import DicasFormacoesComponent from '../../dicas/DicasFormacoesComponent';


Modal.setAppElement("#root");

// Component de de dicas para objetivo
const FormacaoEditarComponent = () => {

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

    const {edicaoFormacao} = useEditarFormacao();

    async function onSubmit(event){
        event.preventDefault();

        await edicaoFormacao(formInput.nivel, formInput.instituicao, formInput.cidade, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open'>📝</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >

                <h2 className='titulo-modal'>Formação acadêmica</h2>
                <DicasFormacoesComponent/>
                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='nivel' placeholder="Nível" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='instituicao' placeholder="Nome da Instituição" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
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
                        
                        <button type='submit' class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                    </form>
                </div> 
            </Modal>
        </div>
    )
}

export default FormacaoEditarComponent