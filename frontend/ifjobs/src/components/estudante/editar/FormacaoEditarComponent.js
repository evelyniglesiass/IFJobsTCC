import '../../../App.scss';
import { useEffect, useState } from 'react';
import { useEditarFormacao } from '../../../hook/formacao/editarFormacao.hook';
import Modal from 'react-modal';
import DicasFormacoesComponent from '../../dicas/DicasFormacoesComponent';


Modal.setAppElement("#root");

// Component com inputs para edição de formações com dicas
const FormacaoEditarComponent = ({ formacao, listar }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [nivel, setNivel] = useState(0);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (formacao.nivel === 'FUNDAMENTAL') {
            setNivel(0)
        } else if (formacao.nivel === "MEDIO") {
            setNivel(1)
        } else if (formacao.nivel === "TECNICO") {
            setNivel(2)
        } else if (formacao.nivel === "MEDIO_TECNICO") {
            setNivel(3)
        } else if (formacao.nivel === "SUPERIOR") {
            setNivel(4)
        }

        console.log("f" + formacao.nivel)
        console.log(formInput)

    }, [formacao])

    const [formInput, setFormInput] = useState({
        nivel: formacao.nivel,
        instituicao: formacao.instituicao,
        cidade: formacao.cidade,
        dataInicial: formacao.dataInicial,
        dataFinal: formacao.dataFinal,
        descricao: formacao.descricao
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
    }

    const { editarFormacao } = useEditarFormacao();

    async function onSubmit(event) {
        event.preventDefault();

        await editarFormacao(formInput.descricao, formInput.cidade, formInput.instituicao, formInput.dataInicial, formInput.dataFinal, formInput.nivel, formacao.id);
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

                <h2 className='titulo-modal'>Formação acadêmica</h2>
                <DicasFormacoesComponent />
                <hr />
                <div className='container-cursos-exper'>

                    <form onSubmit={onSubmit}>
                        <div class="txt-form-group">
                            <select defaultValue={nivel} className='form-control' name='nivel' onChange={handleChange}>
                                <option value="" disabled selected>Nível</option>
                                <option value="0">Fundamental</option>
                                <option value="1">Médio</option>
                                <option value="2">Técnico</option>
                                <option value="3">Médio técnico</option>
                                <option value="4">Superior</option>
                            </select>
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" defaultValue={formacao.instituicao} class="form-control" name='instituicao' placeholder="Nome da Instituição" onChange={handleChange} />
                        </div>
                        <div className='txt-form-group'>
                            <input type="text" defaultValue={formacao.cidade} class="form-control" name='cidade' placeholder="Cidade" onChange={handleChange} />
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" defaultValue={formacao.dataInicial} class="form-control" name='dataInicial' onChange={handleChange} />
                        </div>
                        <div className='txt-form-group'>
                            <input type="date" defaultValue={formacao.dataFinal} class="form-control" name='dataFinal' onChange={handleChange} />
                        </div>
                        <div className='txt-form-group'>
                            <textarea type="textarea" defaultValue={formacao.descricao} class="form-control" name='descricao' placeholder="Descrição" maxLength={250} onChange={handleChange} />
                        </div>

                        <button type='submit' class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default FormacaoEditarComponent