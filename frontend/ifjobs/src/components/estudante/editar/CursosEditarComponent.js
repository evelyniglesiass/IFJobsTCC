import '../../../App.scss';
import { useState } from 'react';
import { useEditarCurso } from '../../../hook/curso/editarCurso.hook';
import Modal from 'react-modal';
import DicasCursosComponent from '../../dicas/DicasCursosComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CursosEditarComponent = ({cursos, listar}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        instituicao: cursos.instituicao,
        cidade: cursos.cidade,
        cargaHoraria: cursos.cargaHoraria,
        dataInicial: cursos.dataInicial,
        dataFinal: cursos.dataFinal,
        descricao: cursos.descricao
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarCurso} = useEditarCurso();

    async function onSubmit(event){
        event.preventDefault();

        await editarCurso(formInput.cargaHoraria, formInput.cidade, formInput.descricao, formInput.dataInicial, formInput.dataFinal,  formInput.instituicao, cursos.id);
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

                <h2 className='titulo-modal'>Cursos e certificados</h2>
                <DicasCursosComponent/>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div className='txt-form-group'>
                        <input type="text" defaultValue={cursos.instituicao} class="form-control" name='instituicao' placeholder="Instituição" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" defaultValue={cursos.cidade} class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="text" defaultValue={cursos.cargaHoraria} class="form-control" name='cargaHoraria' placeholder="Carga horária" onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                    <input type="date" defaultValue={cursos.dataInicial} class="form-control" name='dataInicial' onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <input type="date" defaultValue={cursos.dataFinal} class="form-control" name='dataFinal' onChange={handleChange}/>
                    </div>
                    <div className='txt-form-group'>
                        <textarea type="textarea" defaultValue={cursos.descricao} class="form-control" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default CursosEditarComponent