// css
import './App.css';

// router
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import ProjectPage from './components/pages/ProjectPage';

// components
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project/:id' element={<ProjectPage />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
