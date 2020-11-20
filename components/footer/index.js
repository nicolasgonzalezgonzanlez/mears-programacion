import {
  FooterComponent,
  Container,
  Content,
  Section,
  Link,
  Copyright,
} from './styles'
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'
export const Footer = () => (
  <FooterComponent>
    <Section>
      <Link href="https://github.com/nicolasgonzalezgonzanlez" target="_blank">
        <FiGithub size="25px" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/nicol%C3%A1s-gonzalez-gonzalez/"
        target="_blank"
      >
        <AiFillLinkedin size="25px" />
      </Link>
      <Link href="https://nicolasgonzalezprogramador.web.app/" target="_blank">
        <RiPagesLine size="25px" />
      </Link>
    </Section>
    <Container>
      <Content>
        Sobre mí <br />
        <br />
        Apasionado desarrollador frontend, responsable, creativo y dinámico, con
        facilidad de adaptación y capacidad de trabajar en equipo. Busco
        aprender constantemente y resolver desafíos cada vez más complejos.
      </Content>
    </Container>
    <Copyright>
      <Content>© Nicolas Gonzalez</Content>
    </Copyright>
  </FooterComponent>
)
