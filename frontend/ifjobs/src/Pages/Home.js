import '../App.scss';

import LoginComponent from '../components/LoginComponent';
import InfoComponent from '../components/InfoComponent';

import Background from "../imagens/home.png";

const Home = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <article className='info-component'><InfoComponent/></article>
      <article className='login-component'><LoginComponent/></article>
    </section>
  )
}

 
export default Home
