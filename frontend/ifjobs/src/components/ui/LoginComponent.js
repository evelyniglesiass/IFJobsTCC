import { Link } from 'react-router-dom';
import '../../App.scss';

const LoginComponent = () => {

  return (
    <div className='container-login'>

        <h3>Bem vindo!</h3>
        <h6 className='link'>Cadastrar <Link className='link-cadastro' to={"/cadastrar/estudante"}>Estudante</Link> / <Link className='link-cadastro' to={"/cadastrar/empresa"}>Empresa</Link><br /></h6>

        <form className='login'>
            <input type='text' placeholder='Email' value='' className='txt form-control'/> 
            <input type='text' placeholder='Senha' value='' className='txt form-control'/> 

            <input type="button" value='Login' className='btn btn-dark'/>
        </form>

    </div> 
  )
}

export default LoginComponent