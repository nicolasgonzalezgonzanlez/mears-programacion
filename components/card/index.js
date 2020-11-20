import LinkNext from 'next/link'
import {
  CardContainer,
  Title,
  CardArea,
  CardAction,
  Image,
  Button,
  Link,
} from './styles'

export const Card = ({ srcImage, title, urlRepo, urlExample }) => (
  <CardContainer>
    <CardArea>
      <Image src={srcImage} />
      <Title>{title}</Title>
    </CardArea>
    <CardAction>
      <Button>
        <Link href={urlRepo} target="_blank">
          Repo
        </Link>
      </Button>
      <LinkNext href={urlExample}>
        <Button>Example</Button>
      </LinkNext>
    </CardAction>
  </CardContainer>
)
