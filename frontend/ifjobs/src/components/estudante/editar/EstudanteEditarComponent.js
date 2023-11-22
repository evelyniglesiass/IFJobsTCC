import '../../../App.scss';
import { useState } from 'react';
import { useEditarEstudante } from '../../../hook/estudante/editarEstudante.hook';
import Modal from 'react-modal';
import DicasCursosComponent from '../../dicas/DicasCursosComponent';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const EstudanteEditarComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInput] = useState({
        nome: '',
        usuario: '',
        idade: '',
        curso: 0,
        telefone: '',
        email: '',
        senha: '',
        cidade: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {edicaoEstudante} = useEditarEstudante();

    async function onSubmit(event){
        event.preventDefault();

        await edicaoEstudante(formInput.nome, formInput.usuario, formInput.idade, formInput.curso, formInput.telefone, formInput.email, formInput.senha, formInput.cidade);
        
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

                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Estudante</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmit}>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="nome" placeholder="Nome" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="idade" placeholder="Idade" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <select className='form-control' name='curso' onChange={handleChange}>
                            <option value="" disabled selected>Curso</option>
                            <option value="0">Informática</option>
                            <option value="1">Eventos</option>
                            <option value="2">Mecânica</option>
                            <option value="3">Plásticos</option>
                        </select>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="telefone" placeholder="Telefone" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="password" class="form-control" name="senha" placeholder="Senha" onChange={handleChange}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="cidade" placeholder="Cidade" onChange={handleChange}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>

            </Modal>
        </div>
    )
}

export default EstudanteEditarComponent