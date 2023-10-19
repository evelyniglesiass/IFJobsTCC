import '../../App.scss';

import InfoComponent from '../../components/ui/InfoComponent';

import Background from "../../imagens/home.png";
import CadastrarComponent from '../../components/ui/CadastrarComponent';

const HomeCadastrar = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <article className='info-component'><InfoComponent/></article>
      <article className='login-component'><CadastrarComponent/></article>
    </section>
  )
}

 
export default HomeCadastrar