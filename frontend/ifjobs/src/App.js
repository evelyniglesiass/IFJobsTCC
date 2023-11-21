// Import SASS
import './App.scss';

// Import de pages
import Home from './pages/geral/Home';
import Feed from './pages/geral/Feed';
import EmpresaCadastrar from './pages/empresa/EmpresaCadastrar';
import VagaCadastrar from './pages/empresa/VagaCadastrar';
import EstudanteCadastrar from './pages/estudante/EstudanteCadastrar';
import DetalhesVagaEstudante from './pages/estudante/DetalhesVagaEstudante';
import EditarEstudante from './pages/estudante/EditarEstudante';
import EditarEmpresa from './pages/empresa/EditarEmpresa';
import Empresas from './pages/geral/Empresas';
import Salvos from './pages/geral/Salvos';
import PerfilEstudante from './pages/estudante/PerfilEstudante';
import PerfilEmpresa from './pages/empresa/PerfilEmpresa';
import Estudante from './pages/estudante/Estudante';
import Empresa from './pages/empresa/Empresa';
import DetalhesVaga from './pages/empresa/DetalhesVaga';
import EditarVaga from './pages/empresa/EditarVaga';
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

            {/* Cadastrar */}
            <Route path='/cadastrar/estudante' element={<EstudanteCadastrar/>} /> {/*ta com algum problema*/}
            <Route path='/cadastrar/empresa' element={<EmpresaCadastrar/>} /> {/*OK*/}
            <Route path='/cadastrar/vaga' element={<VagaCadastrar/>} />

            {/* Feed com vagas, empresas, estudantes e vagas salvas pelo estudante (falta pesquisar em todos) */}
            <Route path='/feed' element={<Feed/>} /> {/*feed com todas as vagas OK*/}
            <Route path='/salvos' element={<Salvos/>} /> {/*feed com vagas salvas por um estudante OK*/}

            <Route path='/estudantes' element={<Estudantes/>} /> {/*feed estudantes visão empresa OK*/}
            <Route path='/empresas' element={<Empresas/>} /> {/*feed empresas visão estudante OK*/}

            <Route path='/estudantes/sem' element={<EstudantesSemLogado/>} /> {/*feed estudantes visão estudante OK*/}
            <Route path='/empresas/sem' element={<EmpresasSemLogada/>} /> {/*feed empresas visão empresa OK*/}

            {/* Visualizar estudante, perfil logado e editar perfil logado de esudante */}
            <Route path='/estudante/:id' element={<Estudante/>} /> {/*ta dando um erro sem sentido ALGUM*/}
            <Route path='/perfil/estudante' element={<PerfilEstudante/>} /> {/*OK*/}
            <Route path='/perfil/estudante/editar' element={<EditarEstudante/>} /> {/*vai sair*/}

            {/* Visualizar empresa, perfil logado e editar perfil logado de empresa */}
            <Route path='/empresa/:id' element={<Empresa/>} /> {/*perfil da empresa logada OK*/}
            <Route path='/perfil/empresa' element={<PerfilEmpresa/>} /> {/*perfil da empresa logada OK*/}
            <Route path='/perfil/empresa/editar' element={<EditarEmpresa/>} /> {/*vai sair*/}

            {/* Visualizar vaga, editar vaga */}
            <Route path='/detalhes/vaga/:id' element={<DetalhesVaga/>} /> {/*detalhes vaga visão empresa que postou OK*/}
            <Route path='/detalhes/vaga/estudante/:id' element={<DetalhesVagaEstudante/>} /> {/*detalhes vaga visualizar OK*/}
            {/*falta uma page para uma outra empresa visualizar a vaga sem o botão editar ou candidatar-se*/}
            <Route path='/detalhes/vaga/editar' element={<EditarVaga/>} /> {/*vai sair*/}

          </Routes>
        </BrowserRouter>
      </GlobalUserProvider>
    </div>
  );
}

export default App; 
