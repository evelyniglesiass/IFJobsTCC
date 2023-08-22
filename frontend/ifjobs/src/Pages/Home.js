import './Home.scss';

import LoginComponent from '../Components/LoginComponent';
import InfoComponent from '../Components/InfoComponent';

import Background from "../Imagens/home.png";

const Home = () => {

  return (
    <div className='container-home' style={{ backgroundImage: `url(${Background})`}}> 
      <div className='info-component'><InfoComponent/></div>
      <div className='login-component'><LoginComponent/></div>
    </div>
  )
}

 
export default Home
