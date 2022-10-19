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
import Container from './components/layout/Container';

const App = () => {
  return (
    <>
      <Header />
      <Container customClass={'min-height'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-project" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
