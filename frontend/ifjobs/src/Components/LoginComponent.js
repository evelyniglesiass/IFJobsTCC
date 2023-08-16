import '../Components/LoginComponent.scss'; 
import { useState } from 'react';

const LoginComponent = () => {

    const [cadastro, setCadastro] = useState(false);

    function mudarCadastro() {
        setCadastro(true);
    }

    function mudarLogin() {
        setCadastro(false);
    }

  return (
    <div className='container-login'>
         <h5>Bem vindo, o que você deseja fazer?</h5>
        <form className="cabecalho btn-group">
            <input type="radio" className="btn-check" name="btnradio" id="btnlogin" autocomplete="off" onClick={mudarLogin}/>
            <label className="btn btn-outline-secondary" for="btnlogin">Login</label>

            <input type="radio" className="btn-check" name="btnradio" id="btncadastro" autocomplete="off" onClick={mudarCadastro}/>
            <label className="btn btn-outline-secondary" for="btncadastro">Cadastrar</label>
        </form>

        {
            cadastro
            ? 
            <form className='login'>
                <input type='text' placeholder='Nome' className='form-control'/> 
                <input type='text' placeholder='Email' className='form-control'/> 
                <input type='text' placeholder='Senha' className='form-control'/> 
                <input type='text' placeholder='Confirme sua senha' className='form-control'/>

                <input type="button" value='Cadastrar' className='btn btn-secondary'/>
            </form>
            :
            <form className='login'>
                <input type='text' placeholder='Email' className='form-control'/> 
                <input type='text' placeholder='Senha' className='form-control'/> 

                <input type="button" value='Login' className='btn btn-secondary'/>
            </form>
        }

    </div>
  )
}

export default LoginComponent