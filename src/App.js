 import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index/Index';
import Fornecedores from './Pages/Fornecedores/FornecedoresIndex'
import FornecedorById from './Pages/Fornecedores/FornecedorById';
import FornecedorCreate from './Pages/Fornecedores/FornecedorCreate';
import FornecedorUpdate from './Pages/Fornecedores/FornecedorUpdate';
function App() {
  return (
    
    <Router>
    <div>

     <Routes>

        <Route path="/" element={<Index/>}/>     
        <Route path="/fornecedores/lista" element={<Fornecedores/>}/>
        <Route path="/fornecedores/:id" element={<FornecedorById/>}/>
        <Route path="/fornecedores/cadastrar" element={<FornecedorCreate/>}/>
        <Route path="/fornecedores/alterar/:id" element={<FornecedorUpdate/>}/>
      </Routes>
  
   
    </div>
    </Router>
  );
}

export default App;
