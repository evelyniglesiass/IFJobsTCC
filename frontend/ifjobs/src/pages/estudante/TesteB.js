import '../../App.scss';
import Background from "../../imagens/home.png";

// Import de Components
import Teste from '../../components/estudante/cadastro/Teste';

// Página para cadastrar estudantes
const HomeCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      <article className='cadastrar-component'><Teste/></article>
    </section>
  )
}
 
export default HomeCadastrar