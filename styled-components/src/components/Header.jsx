import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import Button from './styles/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./assets/logo.svg" alt="logo" />
          <Button>Try it free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
