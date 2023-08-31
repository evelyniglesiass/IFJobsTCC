import '../App.scss';

import LoginComponent from '../Components/LoginComponent';
import InfoComponent from '../Components/InfoComponent';

import Background from "../Imagens/home.png";

const Home = () => {

  return (
    <section className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <article className='info-component'><InfoComponent/></article>
      <article className='login-component'><LoginComponent/></article>
    </section>
  )
}

 
export default Home
