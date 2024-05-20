
import { useContext } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export const Home = () => {
  const {user} = useAuth();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () =>{
    await auth.logout();
    navigate('/');
  }

  return (
    <div className="home">
      <header>
            {auth.user && <button className="botao-logout"onClick={handleLogout}>Logout</button>} 
      </header>
      <div className="conteudo-pagina">
        <div className="card-profile">
          <div className="photo-profile">
            <h2>Profile picture</h2>
            <img src={user?.avatar?.low} alt={`${user?.name}`} />
          </div>
          <ul>
            <li>
              <h2>Your <span>Name</span></h2>
              <div className="user-data">
                <p>{user?.name}</p>
              </div>
            </li>
            <li>
              <h2>Your <span>E-mail</span></h2>
              <div className="user-data">
                <p>{user?.email}</p>  
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};