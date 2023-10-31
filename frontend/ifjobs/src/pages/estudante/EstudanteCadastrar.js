import '../../App.scss';
import Background from "../../imagens/home.png";

// Import de Components
import CadastrarEstudanteComponent from '../../components/estudante/CadastrarEstudanteComponent';

// Página para cadastrar estudantes
const HomeCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      <article className='cadastrar-component'><CadastrarEstudanteComponent/></article>
    </section>
  )
}
 
export default HomeCadastrar