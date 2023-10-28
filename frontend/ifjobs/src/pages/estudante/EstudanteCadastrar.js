import '../../App.scss';

import Background from "../../imagens/home.png";
import CadastrarEstudanteComponent from '../../components/estudante/CadastrarEstudanteComponent';

const HomeCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      <article className='cadastrar-component'><CadastrarEstudanteComponent/></article>
    </section>
  )
}

 
export default HomeCadastrar