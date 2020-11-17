import {
  Container,
  SubContainer,
  Title,
  Subtitle,
  Button,
  Image,
} from './styles'

export const Parallax = () => (
  <Container>
    <SubContainer>
      <Title>ENCONTRA RECURSOS INTERESANTES</Title>
      <Subtitle>
        Esta pagina se hizo para poder mostrar mis habilidades de programacion y
        diseño
      </Subtitle>
      <Button>Sobre mi</Button>
    </SubContainer>
    <Image src="/parallax.png" />
  </Container>
)
