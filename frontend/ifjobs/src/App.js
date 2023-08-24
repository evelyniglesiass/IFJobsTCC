import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages impor
import Home from './Pages/Home';
import Feed from './Pages/Feed';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
