import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages import
import Home from './pages/geral/Home';
import Feed from './pages/geral/Feed';
import Empresas from './pages/empresa/Empresas';
import Salvos from './pages/geral/Salvos';
import PerfilEstudante from './pages/estudante/PerfilEstudante';
import PerfilEmpresa from './pages/empresa/PerfilEmpresa';
import Estudante from './pages/estudante/Estudante';
import Empresa from './pages/empresa/Empresa';
import DetalhesVaga from './pages/empresa/DetalhesVaga';
import EstudanteCadastrar from './pages/geral/EstudanteCadastrar';
import { ToastContainer } from 'react-toastify';
import { useLogin } from './hook/login/login.hook';
import useGlobalUser from './context/usuario/user.context';
import {GlobalUserProvider} from './context/usuario/user.context';
import EmpresaCadastrar from './pages/geral/EmpresaCadastrar';

function App() {
  // const {fazerLogin} = useLogin();

  // const[user, setUser] = useGlobalUser();

  // try {
  //   const usuarioLogado = fazerLogin("heti90908@gmail.com", "senHa099")
  //   setUser(usuarioLogado);

  // } catch (error) {
  //   console.log(error)
  // }

  return (
    <div className='app'>
      <GlobalUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastrar/estudante' element={<EstudanteCadastrar />} />
            <Route path='/cadastrar/empresa' element={<EmpresaCadastrar />} />
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
      </GlobalUserProvider>
      <ToastContainer/>
    </div>
  );
}

export default App; 
