import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages import
import Home from './pages/Home';
import Feed from './pages/Feed';
import Empresas from './pages/Empresas';
import Salvos from './pages/Salvos';
import PerfilEstudante from './pages/PerfilEstudante';
import PerfilEmpresa from './pages/PerfilEmpresa';
//import { useLogin } from './hook/login/login.hook';
//import { GlobalUsuarioProvider } from './context/usuario/usuario.context'; TIREI LA DE BAIXO

function App() {
  //const {fazerLogin} = useLogin();

  // try {
  //   fazerLogin("heti90908@gmail.com", "senHa099")
  // } catch (error) {
  //   console.log(error)
  // }

  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/salvos' element={<Salvos />} />
            <Route path='/perfil/estudante' element={<PerfilEstudante />} />
            <Route path='/perfil/empresa' element={<PerfilEmpresa />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App; 
