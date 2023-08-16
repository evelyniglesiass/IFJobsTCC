import './Home.scss';

import LoginComponent from '../Components/LoginComponent';
import InfoComponent from '../Components/InfoComponent';

const Home = () => {

  return (
    <div className='container-home'>
      <div className='infoComponent'><InfoComponent/></div>
      <div className='loginComponent'><LoginComponent/></div>
    </div>
  )
}


export default Home
