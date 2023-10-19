import '../../App.scss';
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

        <h3>Bem vindo!</h3>
        <h6>O que você deseja fazer?</h6>
        <form className="cabecalho-login btn-group">
            <input type="radio" className="btn-check" name="btnradio" id="btnlogin" autocomplete="off" onClick={mudarLogin}/>
            <label className="btn btn-outline-dark" for="btnlogin">Login</label>

            <input type="radio" className="btn-check" name="btnradio" id="btncadastro" autocomplete="off" onClick={mudarCadastro}/>
            <label className="btn btn-outline-dark" for="btncadastro">Cadastrar</label>
        </form>

        {
            cadastro
            ? 
            <form className='login'>
                <div class="radio form-check">
                    <input class="form-check-input" type="radio" name="usuario" id="estudante" checked/>
                    <label class="form-check-label" for="estudante">
                        Estudante
                    </label>
                </div>
                <div class="radio form-check">
                    <input class="form-check-input" type="radio" name="usuario" id="empresa"/>
                    <label class="form-check-label" for="empresa">
                        Empresa
                    </label>
                </div>

                <input type='text' placeholder='Nome' value='' className='txt form-control'/> 
                <input type='text' placeholder='Email' value='' className='txt form-control'/> 
                <input type='text' placeholder='Senha' value='' className='txt form-control'/> 
                <input type='text' placeholder='Confirme sua senha' value='' className='txt form-control'/>

                <input type="button" value='Cadastrar' className='btn btn-dark'/>
            </form>
            :
            <form className='login'>
                <div class="radio form-check">
                    <input class="form-check-input" type="radio" name="usuario" id="estudante" checked/>
                    <label class="form-check-label" for="estudante">
                        Estudante
                    </label>
                </div>
                <div class="radio form-check">
                    <input class="form-check-input" type="radio" name="usuario" id="empresa"/>
                    <label class="form-check-label" for="empresa">
                        Empresa
                    </label>
                </div>

                <input type='text' placeholder='Email' value='' className='txt form-control'/> 
                <input type='text' placeholder='Senha' value='' className='txt form-control'/> 

                <input type="button" value='Login' className='btn btn-dark'/>
            </form>
        }

    </div> 
  )
}

export default LoginComponent