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
    <div>
        <h5>Bem vindo, o que você deseja fazer?</h5>
        <div className="btn-group">
            <input type="radio" className="btn-check" name="btnradio" id="btnlogin" autocomplete="off" onClick={mudarLogin}/>
            <label className="btn btn-outline-secondary" for="btnlogin">Login</label>

            <input type="radio" className="btn-check" name="btnradio" id="btncadastro" autocomplete="off" onClick={mudarCadastro}/>
            <label className="btn btn-outline-secondary" for="btncadastro">Cadastrar</label>
        </div>

        {
            cadastro
            ? 
            <div className='input-group'>
                <input type='text' placeholder='Nome' className='form-control'/> 
                <input type='text' placeholder='Email' className='form-control'/> 
                <input type='text' placeholder='Senha' className='form-control'/> 
                <input type='text' placeholder='Confirme sua senha' className='form-control'/>

                <input type="button" value='Cadastrar' className='btn btn-secondary'/>
            </div>
            :
            <div className='input-group'>
                <input type='text' placeholder='Email' className='form-control'/> 
                <input type='text' placeholder='Senha' className='form-control'/> 

                <input type="button" value='Login' className='btn btn-secondary'/>
            </div>
        }

    </div>
  )
}

export default LoginComponent