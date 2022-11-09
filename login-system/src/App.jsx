import { useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import Home from './pages/Home';
import Private from './pages/Private';
import './App.css';

const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  };

  return (
    <>
      <header>
        <h1>Header do site</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/private">página privada</Link>
            </li>
            {auth.user && (
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              {' '}
              <Private />{' '}
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
