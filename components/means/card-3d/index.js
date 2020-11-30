import { useEffect } from 'react'
import {
  Container,
  Image,
  Card,
  CardSection,
  Button,
  CardAction,
  Circle,
  CardSectionTitle,
  ControlButtons,
  ButtonSize,
} from './styles'
export const Card3dComponent = () => {
  useEffect(() => {
    console.log('hola')
    const Card = document.getElementById('card')
    const Container = document.getElementById('container')
    const Image = document.getElementById('image')
    Container.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25
      Card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
    Container.addEventListener('mouseenter', (e) => {
      Card.style.transform = 'none'
      Image.style.transform = 'translateZ(200px) rotateZ(-45deg)'
    })
    Container.addEventListener('mouseleave', (e) => {
      Card.style.transform = 'all 0.5s ease'
      Card.style.transform = `rotateY(0deg) rotateX(0deg)`
      Image.style.transform = 'translateZ(0px) rotateZ(0deg)'
    })
  }, [])
  return (
    <Container id="container">
      <Card id="card">
        <CardSectionTitle>
          <Circle />
          <Image id="image" src="/recursos/adidas.png" alt="adidas" />
        </CardSectionTitle>
        <CardSection>
          <h1>Adidas ZX</h1>
          <h3>
            FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
          </h3>
          <ControlButtons>
            <ButtonSize>39</ButtonSize>
            <ButtonSize>40</ButtonSize>
            <ButtonSize active>42</ButtonSize>
            <ButtonSize>44</ButtonSize>
          </ControlButtons>
          <CardAction>
            <Button>Purchase</Button>
          </CardAction>
        </CardSection>
      </Card>
    </Container>
  )
}
