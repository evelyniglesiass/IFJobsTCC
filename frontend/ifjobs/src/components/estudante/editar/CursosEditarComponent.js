import '../../../App.scss';
import { useState } from 'react';
import { useEditarCurso } from '../../../hook/curso/editarCurso.hook';
import Modal from 'react-modal';
import DicasCursosComponent from '../../dicas/DicasCursosComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CursosEditarComponent = () => {

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

    const {edicaoCurso} = useEditarCurso();

    async function onSubmit(event){
        event.preventDefault();

        await edicaoCurso(formInput.titulo, formInput.instituicao, formInput.cidade, formInput.cargaHoraria, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open'>📝</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <h2 className='titulo-modal'>Cursos e certificados</h2>
                <DicasCursosComponent/>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div className='txt-form-group'>
                        <input type="text" class="form-control" name='titulo' placeholder="Nome" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-control" name='instituicao' placeholder="Instituição" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" class="form-control" name='cargaHoraria' placeholder="Carga horária" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                    <input type="date" class="form-control" name='dataInicial' onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="date" class="form-control" name='dataFinal' onChange={handleChange}/>
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

export default CursosEditarComponent