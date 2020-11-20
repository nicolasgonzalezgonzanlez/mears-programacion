import {
  Container,
  SubContainer,
  Title,
  Subtitle,
  Button,
  Image,
  TextGray,
} from './styles'

export const Parallax = () => (
  <Container>
    <SubContainer>
      <TextGray>Programador Full stack javascript</TextGray>
      <Title>ENCONTRA RECURSOS INTERESANTES</Title>
      <Subtitle>
        El objetivo de esta página es brindar recursos intresantes que puedan
        ser reutilizados y mostrar mis habilidades como frontend.
      </Subtitle>
      <Button>Sobre mi</Button>
    </SubContainer>
    <Image src="/parallax.png" />
  </Container>
)
