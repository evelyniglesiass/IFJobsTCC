// Import SASS
import './App.scss';

// Import de pages
import Home from './pages/geral/Home';
import Feed from './pages/geral/Feed';
import DetalhesVagaEstudante from './pages/estudante/DetalhesVagaEstudante';
import Empresas from './pages/geral/Empresas';
import Salvos from './pages/geral/Salvos';
import PerfilEstudante from './pages/estudante/PerfilEstudante';
import PerfilEmpresa from './pages/empresa/PerfilEmpresa';
import Estudante from './pages/estudante/Estudante';
import Empresa from './pages/empresa/Empresa';
import DetalhesVaga from './pages/empresa/DetalhesVaga';
import Estudantes from './pages/geral/Estudantes';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {GlobalUserProvider} from './context/usuario/user.context';
import EstudantesSemLogado from './pages/geral/EstudantesSemLogado';
import EmpresasSemLogada from './pages/geral/EmpresasSemLogada';

function App() {
  return (
    <div className='app'>
      <ToastContainer/>
      <GlobalUserProvider>
        <BrowserRouter>
          <Routes>

            {/* Login */}
            <Route path='/' element={<Home/>} /> 

            {/* Feed com vagas, empresas, estudantes e vagas salvas pelo estudante (falta pesquisar em todos) */}
            <Route path='/feed' element={<Feed/>} /> {/*feed com todas as vagas OK*/}
            <Route path='/salvos' element={<Salvos/>} /> {/*feed com vagas salvas por um estudante OK*/}

            <Route path='/estudantes' element={<Estudantes/>} /> {/*feed estudantes visão empresa OK*/}
            <Route path='/empresas' element={<Empresas/>} /> {/*feed empresas visão estudante OK*/}

            <Route path='/estudantes/sem' element={<EstudantesSemLogado/>} /> {/*feed estudantes visão estudante OK*/}
            <Route path='/empresas/sem' element={<EmpresasSemLogada/>} /> {/*feed empresas visão empresa OK*/}

            {/* Visualizar estudante, perfil logado e editar perfil logado de esudante */}
            <Route path='/estudante/:id' element={<Estudante/>} /> {/*OK*/}
            <Route path='/perfil/estudante' element={<PerfilEstudante/>} /> {/*OK*/}

            {/* Visualizar empresa, perfil logado e editar perfil logado de empresa */}
            <Route path='/empresa/:id' element={<Empresa/>} /> {/*perfil da empresa logada OK*/}
            <Route path='/perfil/empresa' element={<PerfilEmpresa/>} /> {/*perfil da empresa logada OK*/}

            {/* Visualizar vaga, editar vaga */}
            <Route path='/detalhes/vaga/:id' element={<DetalhesVaga/>} /> {/*detalhes vaga visão empresa que postou OK*/}
            <Route path='/detalhes/vaga/estudante/:id' element={<DetalhesVagaEstudante/>} /> {/*detalhes vaga visualizar OK*/}

          </Routes>
        </BrowserRouter>
      </GlobalUserProvider>
    </div>
  );
}

export default App; 
