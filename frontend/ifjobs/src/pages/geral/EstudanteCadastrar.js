import '../../App.scss';

import Background from "../../imagens/home.png";
import CadastrarEstudanteComponent from '../../components/ui/CadastrarEstudanteComponent';

const HomeCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <article className='cadastrar-component'><CadastrarEstudanteComponent/></article>
    </section>
  )
}

 
export default HomeCadastrar