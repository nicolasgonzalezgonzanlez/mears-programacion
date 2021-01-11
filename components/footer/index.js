import {
  FooterComponent,
  Container,
  Content,
  Section,
  Link,
  Copyright,
  Image,
  ContentImage,
  ContentText,
  SectionContent,
  Title,
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
      <SectionContent>
        <ContentImage>
          <Image src="/nico.jpg" />
        </ContentImage>
        <ContentText>
          <Title>Sobre mí</Title>
          <Content>
            Soy un apasionado desarrollador full stack, con orientación
            frontend. Amante de ♥ JAVASCRIPT, enamorado de entender el ¿por qué?
            de las cosas y fascinado por compartir mis conocimientos. Busco
            aprender constantemente, desafiarme a mí mismo y resolver desafíos
            cada vez más complejos. Me considero una persona responsable,
            creativa y dinámica.
          </Content>
        </ContentText>
      </SectionContent>
    </Container>
    <Copyright>
      <Content>© Nicolas Gonzalez</Content>
    </Copyright>
  </FooterComponent>
)
