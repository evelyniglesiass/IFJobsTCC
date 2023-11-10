import { useState } from 'react';
import '../../App.scss';
import { useCadastroEmpresa } from '../../hook/cadastro/cadastroEmpresa.hook';

// Component para cadastro de empresas
const CadastrarEmpresaComponent = () => {

    const [formInput, setFormInput] = useState({
        nome: '',
        usuario: '',
        descricao: '',
        telefone: '',
        email: '',
        senha: '',
        cidade: ''
    })

    function handleChange(event){
        const { name, value } = event.target;

        setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
    }

    const {cadastroEmpresa} = useCadastroEmpresa();

    async function onSubmit(event){
        event.preventDefault();

        await cadastroEmpresa(formInput.nome, formInput.usuario, formInput.descricao, formInput.telefone, formInput.email, formInput.senha, formInput.cidade);
        
    }

  return (
    <div className='container-cadastro'>

        <h3>Seja bem-vindo!</h3>

        <form onSubmit={onSubmit}>
            <div class="txt-form-group"> 
                <input type="text" class="form-control" name="nome" placeholder="Nome" onChange={handleChange}/>
            </div>
            <div class="txt-form-group">
                <input type="text" class="form-control" name="usuario" placeholder="Nome de usuário" onChange={handleChange}/>
            </div>
            <div class="txt-form-group">
                <textarea type="text" class="form-control" name="descricao" placeholder="Descrição" onChange={handleChange}/>
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
            <button type="submit" class="txt btn btn-primary">Cadastrar</button>
        </form>

    </div> 
  )
}
export default CadastrarEmpresaComponent