import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import Button from './styles/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./assets/logo.svg" alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dolor illo fugiat maiores consequatur. Rem tenetur quaerat
              consectetur tempore sed, atque repellendus commodi quia tempora
              totam hic nihil facilis ipsa.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./assets/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
