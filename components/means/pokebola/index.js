import {
  Container,
  Circle,
  Eyes,
  Line,
  Shadow,
  SmileContent,
  Pupil,
} from './styles'
export const PokebolaComponent = () => (
  <Container>
    <Circle>
      <Shadow />
      <Eyes left />
      <Pupil left />
      <Line left />
      <Eyes right />
      <Pupil right />
      <Line right />
      <SmileContent />
    </Circle>
  </Container>
)
