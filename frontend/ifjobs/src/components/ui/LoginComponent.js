import '../../App.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../../hook/login/login.hook';
import CadastrarUsuarioComponent from './CadastrarUsuarioComponent';
import CadastrarExperienciaComponent from '../estudante/cadastro/CadastrarExperienciaComponent';
import CadastrarFormacaoComponent from '../estudante/cadastro/CadastrarFormacaoComponent';
import CadastrarCursoComponent from '../estudante/cadastro/CadastrarCursoComponent';
import EmpresaEditarComponent from '../empresa/editar/EmpresaEditarComponent';


// Component de login
const LoginComponent = () => {

  const [formInput, setFormInput] = useState({
    email: '',
    senha: ''
  })

  function handleChange(event){
      const { name, value } = event.target; 

      setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
  }

  const {fazerLogin} = useLogin();

  async function onSubmit(event){
    event.preventDefault();

    await fazerLogin(formInput.email, formInput.senha);

  }

  return (
    <div className='container-login'>

        <h3>Bem vindo!</h3>

        <form className='login' onSubmit={onSubmit}>
            <input type='text' name='email' placeholder='Email' className='txt form-control' onChange={handleChange}/> 
            <input type='password' name='senha' placeholder='Senha' className='txt form-control' onChange={handleChange}/> 

            <button className='btn btn-dark'><Link to={"/feed"}>Entrar</Link></button>

        </form>

        <div>
            <h6 className='link'>Ainda não tem cadastro? Cadastre-se como</h6>
            <br/>
            <CadastrarUsuarioComponent/>

        </div>

    </div> 
  )
}

export default LoginComponent