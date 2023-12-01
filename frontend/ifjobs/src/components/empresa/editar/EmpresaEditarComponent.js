import React, { useEffect, useState } from 'react'
import '../../../App.scss';
import Modal from 'react-modal';

// Import de Components
import {useEditarEmpresa} from '../../../hook/empresa/editarEmpresa.hook';

Modal.setAppElement("#root");

// Component com inputs para editar perfil da empresa
const EmpresaEditarComponent = ({empresa}) => {

  // Modal 
  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formInput, setFormInputEmpresa] = useState({
        nome: empresa.nome,
        usuario: empresa.nomeUsuario,
        descricao: empresa.descricao,
        telefone: empresa.telefone,
        email: empresa.email,
        senha: empresa.senha,
        cidade: empresa.cidade
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInputEmpresa((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {editarEmpresa} = useEditarEmpresa();

    async function onSubmit(event){
        event.preventDefault();
        console.log(formInput)

        await editarEmpresa(formInput.nome, formInput.usuario, formInput.descricao, formInput.telefone, formInput.email, formInput.senha, formInput.cidade);
        
    }

  return ( 
    <div >

      <button onClick={openModal} className='button-modal-open button-menu'>✎ Editar meu perfil</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content">

          <button onClick={closeModal} className='button-fechar'>X</button>
          
          <h2 className='titulo-modal'>Edite seus dados!</h2>
          <hr/>
          <div className='container-cursos-exper'>
            <form onSubmit={onSubmit}>
                <div class="txt-form-group"> 
                    <input type="text" defaultValue={empresa.nome} className="form-control" name="nome" placeholder="Nome" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <input type="text" defaultValue={empresa.nomeUsuario} className="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <textarea type="text" defaultValue={empresa.descricao} className="form-control" name="descricao" placeholder="Descrição" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <input type="text" defaultValue={empresa.telefone} className="form-control" name="telefone" placeholder="Telefone" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <input type="email" defaultValue={empresa.email} className="form-control" name="email" placeholder="E-mail" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <input type="text" className="form-control" name="senha" placeholder="Senha" onChange={handleChange}/>
                </div>
                <div class="txt-form-group">
                  <input type="text" defaultValue={empresa.cidade} className="form-control" name="cidade" placeholder="Cidade" onChange={handleChange}/>
                </div>
                  
                <button type="submit" class="txt btn btn-primary" id='botao-cadastro-modal'>Salvar</button>
            </form>
            </div>

      </Modal>
    </div>
  )
}

export default EmpresaEditarComponent