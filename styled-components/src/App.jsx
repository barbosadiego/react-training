import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import content from './components/content';
import Card from './components/Card';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
