import '../../App.scss';
import { Link, redirect } from 'react-router-dom';


// Component de erro de pagina não econtrada
const ErrorComponent = () => {

  return (
    <div className='container-error'>
      <article className='titulo-error'>
        <h1>404</h1>
      </article>
      <h5 className='sub-error'>A página que você está procurando não foi encontrada.</h5>
      <button className='botao btn'><Link to={"/"}>Voltar para tela de login</Link></button>
    </div>
  )
}

export default ErrorComponent