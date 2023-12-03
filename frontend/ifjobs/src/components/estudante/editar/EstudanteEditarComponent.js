import '../../../App.scss';
import { useState, useEffect } from 'react';
import { useEditarEstudante } from '../../../hook/estudante/editarEstudante.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const EstudanteEditarComponent = ({estudante, listarCur}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [curso, setCurso] = useState(0);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (estudante.curso === 'INFORMATICA') {
            setCurso(0)
        } else if(estudante.curso === "EVENTOS") {
            setCurso(1)
        } else if(estudante.curso === "MECANICA") {
            setCurso(2)
        }else if(estudante.curso === "PLASTICOS") {
            setCurso(3)
        }

    }, [estudante])

    const [formInput, setFormInput] = useState({
        nome: estudante.nome,
        usuario: estudante.nomeUsuario,
        idade: estudante.idade,
        curso: estudante.curso,
        telefone: estudante.telefone,
        email: estudante.email,
        senha: "",
        cidade: estudante.cidade
    })
    
    function handleChange(event) {
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));

        console.log(formInput)
    }

    const { editarEstudante } = useEditarEstudante();

    async function onSubmit(event) {
        event.preventDefault();

        await editarEstudante(formInput.nome, formInput.usuario, formInput.idade, formInput.curso, formInput.telefone, formInput.email, formInput.cidade, formInput.senha);
        
        listarCur()
    }

    useEffect(() => {
        setFormInput({
            nome: estudante.nome,
            usuario: estudante.nomeUsuario,
            idade: estudante.idade,
            curso: estudante.curso,
            telefone: estudante.telefone,
            email: estudante.email,
            senha: "",
            cidade: estudante.cidade
        })
    }, [estudante]);
    
    return (
        <div>
            <button onClick={openModal} className='button-modal-open button-menu-li'>📝 Editar meus dados</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Estudante</h2>
                <hr />
                <div className='container-cursos-exper'>
                    <form onSubmit={onSubmit}>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.nome} className="form-control" name="nome" placeholder="Nome" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.nomeUsuario} className="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.idade} className="form-control" name="idade" placeholder="Idade" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <select defaultValue={curso} className='form-control' name='curso' onChange={handleChange}>
                                <option value="" disabled selected>Curso</option>
                                <option value="0">Informática</option>
                                <option value="1">Eventos</option>
                                <option value="2">Mecânica</option>
                                <option value="3">Plásticos</option>
                            </select>
                        </div>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.telefone} className="form-control" name="telefone" placeholder="Telefone" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <input type="email" defaultValue={estudante.email} className="form-control" name="email" placeholder="E-mail" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.senha} className="form-control" name="senha" placeholder="Senha" onChange={handleChange} />
                        </div>
                        <div class="txt-form-group">
                            <input type="text" defaultValue={estudante.cidade} className="form-control" name="cidade" placeholder="Cidade" onChange={handleChange} />
                        </div>

                        <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default EstudanteEditarComponent