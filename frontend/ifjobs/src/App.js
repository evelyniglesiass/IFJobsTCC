import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages import
import Home from './pages/Home';
import Feed from './pages/Feed';
import Empresas from './pages/Empresas';
import Salvos from './pages/Salvos';
import PerfilEstudante from './pages/PerfilEstudante';
import PerfilEmpresa from './pages/PerfilEmpresa';
import Estudante from './pages/Estudante';
import Empresa from './pages/Empresa';
import DetalhesVaga from './pages/DetalhesVaga';
import HomeCadastrar from './pages/HomeCadastrar';
import { ToastContainer } from 'react-toastify';
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
            <Route path='/cadastrar' element={<HomeCadastrar />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/salvos' element={<Salvos />} />
            <Route path='/perfil/estudante' element={<PerfilEstudante />} />
            <Route path='/perfil/empresa' element={<PerfilEmpresa />} />
            <Route path='/estudante' element={<Estudante/>} />
            <Route path='/empresa' element={<Empresa/>} />
            <Route path='/detalhes/vaga' element={<DetalhesVaga/>} />
          </Routes>
        </BrowserRouter>

        <ToastContainer/>
    </div>
  );
}

export default App; 
