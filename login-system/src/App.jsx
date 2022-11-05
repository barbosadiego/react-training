import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';
import './App.css';

const App = () => {
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
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </>
  );
};

export default App;
