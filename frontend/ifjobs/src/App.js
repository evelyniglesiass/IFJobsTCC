import './App.scss';

import Home from './pages/geral/Home';
import Feed from './pages/geral/Feed';
import Salvos from './pages/geral/Salvos';
import Estudante from './pages/estudante/Estudante';
import Empresa from './pages/empresa/Empresa';
import Error from './pages/geral/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalUserProvider } from './context/usuario/user.context';
import { PrivateRoutePerfil } from './router/private-route-perfil.component';
import { PrivateRouteEmpresas } from './router/private-route-empresas.component';
import { PrivateRouteEstudantes } from './router/private-route-estudantes.compoent';
import { PrivateRouteVagas } from './router/private-route-vagas.component';

function App() {
  return (
    <div className='app'>
      <ToastContainer />
      <GlobalUserProvider>
        <BrowserRouter>
          <Routes>

            <Route path='*' element={<Error />} />

            <Route path='/' element={<Home />} />
            <Route path='/perfil' element={<PrivateRoutePerfil />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/empresas' element={<PrivateRouteEmpresas />} />
            <Route path='/estudantes' element={<PrivateRouteEstudantes />} />
            <Route path='/salvos' element={<Salvos />} />

            <Route path='/estudante/:id' element={<Estudante />} />
            <Route path='/empresa/:id' element={<Empresa />} />

            <Route path='/detalhes/vaga/:id' element={<PrivateRouteVagas />} />

          </Routes>
        </BrowserRouter>
      </GlobalUserProvider>
    </div>
  );
}

export default App; 
