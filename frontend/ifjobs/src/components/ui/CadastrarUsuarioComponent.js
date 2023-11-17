import '../../App.scss';
import { useState } from 'react';
import { useCadastroEstudante } from '../../hook/estudante/cadastrarEstudante.hook';
import { useCadastroEmpresa } from '../../hook/empresa/cadastroEmpresa.hook';

import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarEstudanteComponent = () => {

    // Estudante

    const [modalEstudanteIsOpen, setEstudanteIsOpen] = useState(false);

    function openModalEstudante() {
        setEstudanteIsOpen(true);
    }

    function closeModalEstudante() {
        setEstudanteIsOpen(false);
    }

    const [formInputEstudante, setFormInputEstudante] = useState({
        nome: '',
        usuario: '',
        idade: 0,
        telefone: '',
        email: '',
        senha: '',
        cidade: ''
    })

    function handleChangeEstudante(event){
        const { name, value } = event.target;

        setFormInputEstudante((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroEstudante} = useCadastroEstudante();

    async function onSubmitEstudante(event){
        event.preventDefault();

        await cadastroEstudante(formInputEstudante.nome, formInputEstudante.usuario, formInputEstudante.idade, formInputEstudante.telefone, formInputEstudante.email, formInputEstudante.senha, formInputEstudante.cidade);
        
    }

    //Empresa

    const [modalEmpresaIsOpen, setEmpresaIsOpen] = useState(false);

    function openModalEmpresa() {
        setEmpresaIsOpen(true);
    }

    function closeModalEmpresa() {
        setEmpresaIsOpen(false);
    }

    const [formInputEmpresa, setFormInputEmpresa] = useState({
        nome: '',
        usuario: '',
        descricao: '',
        telefone: '',
        email: '',
        senha: '',
        cidade: ''
    })

    function handleChangeEmpresa(event){
        const { name, value } = event.target;

        setFormInputEmpresa((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroEmpresa} = useCadastroEmpresa();

    async function onSubmitEmpresa(event){
        event.preventDefault();

        await cadastroEmpresa(formInputEmpresa.nome, formInputEmpresa.usuario, formInputEmpresa.descricao, formInputEmpresa.telefone, formInputEmpresa.email, formInputEmpresa.senha, formInputEmpresa.cidade);
        
    }

    return (
        <div className='container-modal'>
            <button onClick={openModalEstudante} className='button-modal-open' id='botao-open-cadastro'>Estudante <span id='span-ou' style={{color:'#323434'}}>ou</span></button>
            <button onClick={openModalEmpresa} className='button-modal-open' id='botao-open-cadastro'>Empresa</button>

            {/* Modal de cadastro de estudante */}
            <Modal
                isOpen={modalEstudanteIsOpen}
                onRequestClose={closeModalEstudante}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >

                <h2 className='titulo-modal'>Seja bem vindo!</h2>
                <hr/>
                <div className='container-cursos-exper'>
                    
                <form onSubmit={onSubmitEstudante}>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="nome" placeholder="Nome" onChange={handleChangeEstudante}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChangeEstudante}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="idade" placeholder="Idade" onChange={handleChangeEstudante}/>
                    </div>
                    {/* <div class="txt-form-group">
                        <input type="text" class="form-control" name="curso" placeholder="Curso" />
                    </div> */}
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="telefone" placeholder="Telefone" onChange={handleChangeEstudante}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={handleChangeEstudante}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="password" class="form-control" name="senha" placeholder="Senha" onChange={handleChangeEstudante}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="cidade" placeholder="Cidade" onChange={handleChangeEstudante}/>
                    </div>

                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>
            </Modal>

            {/* Modal de cadstro de empresa */}
            <Modal
                isOpen={modalEmpresaIsOpen}
                onRequestClose={closeModalEmpresa}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content">

                <h2 className='titulo-modal'>Seja bem vindo!</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <form onSubmit={onSubmitEmpresa}>
                    <div class="txt-form-group"> 
                        <input type="text" class="form-control" name="nome" placeholder="Nome" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <textarea type="text" class="form-control" name="descricao" placeholder="Descrição" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="telefone" placeholder="Telefone" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="password" class="form-control" name="senha" placeholder="Senha" onChange={handleChangeEmpresa}/>
                    </div>
                    <div class="txt-form-group">
                        <input type="text" class="form-control" name="cidade" placeholder="Cidade" onChange={handleChangeEmpresa}/>
                    </div>
                    <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Cadastrar</button>
                </form>
                </div>
            </Modal>
        </div>
    )
}

export default CadastrarEstudanteComponent