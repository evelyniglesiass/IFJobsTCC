import '../../../App.scss';
import { useState } from 'react';
import { useEditarExperiencia } from '../../../hook/experiencia/editarExperiencia.hook';
import Modal from 'react-modal';
import DicasExperienciaComponent from '../../dicas/DicasExperienciaComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const ExperienciasEditarComponent = ({experiencia}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        empresa: experiencia.empresa,
        cargo: experiencia.cargo,
        dataInicial: experiencia.dataInicial,
        dataFinal: experiencia.dataFinal,
        descricao: experiencia.descricao
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }
    const {edicaoExperiencia} = useEditarExperiencia();

    async function onSubmit(event){
        event.preventDefault();

        await edicaoExperiencia(formInput.empresa, formInput.cargo, formInput.dataInicial, formInput.dataFinal, formInput.descricao);
        
    }

    return (
        <div className='container-modal modal-editar-exp'>
            <button onClick={openModal} className='button-modal-open'>✎</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Experiência profissional</h2>
                <DicasExperienciaComponent/>
                <hr/>
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div className='txt-form-group'>
                            <input type="text" defaultValue={experiencia.empresa} class="form-control" name='empresa' placeholder="Empresa" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" defaultValue={experiencia.cargo} class="form-control" name='cargo' placeholder="Cargo" onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" defaultValue={experiencia.dataInicial} class="form-control" name='dataInicial'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" defaultValue={experiencia.dataFinal} class="form-control" name='dataFinal'onChange={handleChange}/>
                        </div>
                        <div className='txt-form-group'>
                            <textarea type="textarea" defaultValue={experiencia.descricao} class="form-control" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange}/>
                        </div>
                        
                        <button type='submit' class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                    </form>
                </div> 
            </Modal>
        </div>
    )
}

export default ExperienciasEditarComponent