import { Header, Container, Image, Title, Link, Section } from './styles'
// icons
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'

export const Menu = () => (
  <Header>
    <Container>
      <Image src="/nico.jpg" />
      <Title>Nicolas Gonzalez</Title>
    </Container>

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
  </Header>
)
