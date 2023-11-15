import '../../../App.scss';
import { useState } from 'react';
import { useCadastroEstudante } from '../../../hook/estudante/cadastrarEstudante.hook';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarEstudanteComponent = () => {

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
        idade: 0,
        telefone: '',
        email: '',
        senha: '',
        cidade: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroEstudante} = useCadastroEstudante();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroEstudante(formInput.nome, formInput.usuario, formInput.idade, formInput.telefone, formInput.email, formInput.senha, formInput.cidade);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open tela-login'>Estudante</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >

                <h2 className='titulo-modal'>Seja bem vindo!</h2>
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
                        <input type="text" class="form-control" name="curso" placeholder="Curso" />
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

export default CadastrarEstudanteComponent