import '../../App.scss';

import Background from "../../imagens/home.png";
import CadastrarEmpresaComponent from '../../components/empresa/CadastrarEmpresaComponent';

const EmpresaCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      <article className='cadastrar-component'><CadastrarEmpresaComponent/></article>
    </section>
  )
}

 
export default EmpresaCadastrar