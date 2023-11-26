import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarFormacao } from '../../../hook/formacao/cadastrarFormacao.hook';
import DicasFormacoesComponent from '../../dicas/DicasFormacoesComponent';
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
        nivel: 0,
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

    const {cadastrarFormacao} = useCadastrarFormacao();

    async function onSubmit(event){
        event.preventDefault();

        await cadastrarFormacao(formInput.nivel, formInput.instituicao, formInput.cidade, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal modal-cadastrar-for'>
            <button onClick={openModal} className='button-modal-open'>✚</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Formação acadêmica</h2>
                <DicasFormacoesComponent/>

                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div class="txt-form-group">
                            <select className='form-control' name='nivel' onChange={handleChange}>
                                <option value="" disabled selected>Nível</option>
                                <option value="0">Fundamental</option>
                                <option value="1">Médio</option>
                                <option value="2">Técnico</option>
                                <option value="3">Médio técnico</option>
                                <option value="4">Superior</option>
                            </select>
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
                        
                        <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                    </form>
                </div> 
            </Modal>
        </div>
    )
}

export default CadastrarFormacaoComponent