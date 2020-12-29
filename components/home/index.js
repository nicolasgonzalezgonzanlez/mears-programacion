import { useState, useEffect } from 'react'
import { Container } from './styles'
import { Card } from 'components/card/index'

export const Category = () => {
  const [utils, setUtils] = useState([])

  useEffect(() => {
    setUtils([
      {
        srcImage: '/gifs/Card-3d.gif',
        title: 'Card 3D',
        urlRepo:
          'https://github.com/nicolasgonzalezgonzanlez/mears-programacion',
        urlExample: 'means/card-3d',
      },
    ])
  }, [])

  return (
    <Container>
      {utils.length > 0 &&
        utils.map((element, key) => {
          return <Card key={key} {...element} />
        })}
    </Container>
  )
}
