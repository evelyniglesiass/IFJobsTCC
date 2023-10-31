import '../../App.scss';
import Background from "../../imagens/home.png";

// Import de Components
import LoginComponent from '../../components/ui/LoginComponent';
import InfoComponent from '../../components/ui/InfoComponent';

// Página de login
const Home = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <article className='info-component'><InfoComponent/></article>
      <article className='login-component'><LoginComponent/></article>
    </section>
  )
}
 
export default Home
