import '../../App.scss';
import Background from "../../imagens/home.png";

// Import de Components
import CadastrarVagaComponent from '../../components/empresa/CadastrarVagaComponent';

// Página para cadastrar empresas
const VagaCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      <article className='cadastrar-component'><CadastrarVagaComponent/></article>
    </section>
  )
}
 
export default VagaCadastrar