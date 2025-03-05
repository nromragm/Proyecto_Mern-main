import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import CrearUsuario from './components/CrearUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className=''>
        <Navegacion />
        <div className='container p-4'>
          <Routes>
            <Route path='/listaUsuarios' element={<PrivateRoute><ListaUsuarios /></PrivateRoute>} />
            <Route path='/CrearUsuario' element={<CrearUsuario />} />
            <Route path='/edit/:id' element={<CrearUsuario />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;