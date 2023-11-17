import '../../../App.scss';
import { useState } from 'react';
import { useCadastrarCurso } from '../../hook/curso/cadastrarCurso.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarCursoComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        titulo: '',
        instituicao: '',
        cidade: '',
        cargaHoraria: '',
        dataInicial: '',
        dataFinal: '',
        descricao: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroCurso} = useCadastrarCurso();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroCurso(formInput.titulo, formInput.instituicao, formInput.cidade, formInput.cargaHoraria, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open cadastro-estudante-modal'>➕</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <h2 className='titulo-modal'>Cursos e certificados</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div className='txt-form-group'>
                        <input type="text" class="form-editar cadastros-curriculo" name='titulo' placeholder="Nome" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-editar cadastros-curriculo" name='instituicao' placeholder="Instituição" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-editar cadastros-curriculo" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-editar cadastros-curriculo" name='cargaHoraria' placeholder="Carga horária" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                    <input type="date" class="form-editar cadastros-curriculo" name='dataInicial' onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="date" class="form-editar cadastros-curriculo" name='dataFinal' onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <textarea type="textarea" class="form-editar cadastros-curriculo" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default CadastrarCursoComponent