import { Link } from 'react-router-dom';
import '../../App.scss';

const LoginComponent = () => {

  return (
    <div className='container-login'>

        <h3>Bem vindo!</h3>
        <h6 className='link'><Link to={"/cadastrar"}>Clique aqui para cadastrar-se.</Link><br /></h6>

        <form className='login'>
            <input type='text' placeholder='Email' value='' className='txt form-control'/> 
            <input type='text' placeholder='Senha' value='' className='txt form-control'/> 

            <input type="button" value='Login' className='btn btn-dark'/>
        </form>

    </div> 
  )
}

export default LoginComponent