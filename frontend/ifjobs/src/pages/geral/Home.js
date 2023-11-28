import '../../App.scss';
import Background from "../../imagens/home.png";
import Logo from '../../imagens/logoBrancoLegenda.png'

// Import de Components
import LoginComponent from '../../components/ui/LoginComponent';
import InfoComponent from '../../components/ui/InfoComponent';

// Página de login
const Home = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`, position: 'fixed'}}> 
      {/* <h1 className='fonte-titulo' id='logo-home'>IFJOBS</h1> */}
      <article className='info-component'><InfoComponent/></article>
      <article className='login-component'><LoginComponent/></article>
    </section>
  )
}
 
export default Home
