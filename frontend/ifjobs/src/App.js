import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages import
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Empresas from './Pages/Empresas';
import Salvos from './Pages/Salvos';
import PerfilEstudante from './Pages/PerfilEstudante';
import PerfilEmpresa from './Pages/PerfilEmpresa';

function App() {
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
