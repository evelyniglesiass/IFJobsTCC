import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages impor
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Empresas from './Pages/Empresas';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/empresas' element={<Empresas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
