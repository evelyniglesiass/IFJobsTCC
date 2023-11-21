import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import Modal from 'react-modal';

// Import de Components
import { useListarVagas } from '../../../hook/vagas/listarVagas.hook';
import {useEditarEmpresa} from '../../../hook/empresa/editarEmpresa.hook'

Modal.setAppElement("#root");

// Component com inputs para editar perfil da empresa
const EmpresaEditarComponent = () => {

  // Listagem de vagas
  const [vagas, setVagas] = useState([])

  const { listarVagas } = useListarVagas();

  useEffect(() => {
    async function listar() {

      const response = await listarVagas();
      
      setVagas(response) 

    }

    listar();
  }, [])

  // Modal
  const [modalIsOpen, setIsOpen] = useState(false);

    function openModalEmpresa() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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

    const {editarEmpresa} = useEditarEmpresa();

    async function onSubmitEmpresa(event){
        event.preventDefault();

        await editarEmpresa(formInputEmpresa.nome, formInputEmpresa.usuario, formInputEmpresa.descricao, formInputEmpresa.telefone, formInputEmpresa.email, formInputEmpresa.senha, formInputEmpresa.cidade);
        
    }

  return ( 
    <div className='container-modal'>
      <button onClick={openModalEmpresa} className='button-modal-open'>📝</button>
      <Modal
        isOpen={openModalEmpresa}
        onRequestClose={closeModal}
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

export default EmpresaEditarComponent