// css
import './App.css';

// router
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/pages/Projects';

const App = () => {
  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
