import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RequiredAuth } from './contexts/Auth/RequiredAuth';
import { AuthContext } from './contexts/Auth/AuthContext';


function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.logout();
    navigate('/');
    //window.location.href = window.location.href
  }

  return (
    <div className="App">
     {/* <header>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        {auth.user && <a href="#" onClick={handleLogout}>Sair</a>}
      </nav>
     </header>
     <hr /> */}
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
     </Routes>
    </div>
  );
}

export default App;
