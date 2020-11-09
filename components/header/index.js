import { Header, Container, Image, Title, Link } from './styles'

export const Menu = () => (
  <Header>
    <Container>
      <Image src="/nico.jpg" />
      <Title>Nicolas Gonzalez</Title>
    </Container>
    <Link
      href="https://nicolasgonzalezprogramador.firebaseapp.com/blog/"
      target="_blank"
    >
      Blog
    </Link>
  </Header>
)
