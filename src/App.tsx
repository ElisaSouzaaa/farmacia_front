import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import HomeLogado from './pages/homeLogado/HomeLogado';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<HomeLogado />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;