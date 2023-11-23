import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import HomeLogado from './pages/homeLogado/HomeLogado';
import ListaCategorias from './components/Categoria/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/Categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/Categoria/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/Produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/Produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/Produtos/deletarProduto/DeletarProduto';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<HomeLogado />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;