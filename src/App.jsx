import './App.css'
import styled from 'styled-components';
import {Container, Header, Logo, Nav, Ul, Li, A, HeadButton, Hero, H1, HeroLeft, P, Herobtn, HeroRight} from './components/untils/index';
import imageLogo from './assets/logo.svg';
import backimg from './assets/back.png';

function App() {

  return (
    
    <>
    <Container>
      <Header>
        <Logo>
          <img id='img' src={imageLogo} alt="rasm" />
          <h2>Kreed</h2>
        </Logo>
        <Nav>
          <Ul>
            <Li>
              <A href="#">Home</A>
            </Li>
            <Li>
              <A href="#">About us</A>
            </Li>
            <Li>
              <A href="#">Locations</A>
            </Li>
            <Li>
              <A href="#">FAQ's</A>
            </Li>
          </Ul>
          <HeadButton>
            Contact Us
          </HeadButton>
        </Nav>
      </Header>
      <Hero>
        <HeroLeft>
          <H1>Love and kindness are never wasted.</H1>
          <P>
          We help around 1,00,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.
          </P>
          <Herobtn>Join Us</Herobtn>
        </HeroLeft>
        <HeroRight>
          <img className='backgound' src={backimg} alt="rasm" />
        </HeroRight>
      </Hero>
    </Container>
    </>
  )
}

export default App
