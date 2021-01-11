import {
  Container,
  Header,
  Navigation,
  Search,
  ContentHomePage,
  ContentText,
  ContentImage,
  Text,
  Title,
  Black,
  Image,
  ContentSection,
  Section,
  Icon,
  SectionText,
} from './styles'
export const HomePageInnovativeComponent = () => (
  <>
    <Container>
      <Header>
        <Navigation>Home</Navigation>
        <Navigation>Team</Navigation>
        <Navigation>Login</Navigation>
        <Search type="text" />
      </Header>
      <ContentHomePage>
        <ContentText>
          <Title>
            <Black>New</Black> & <br />
            innovative <br />
            <Black>ideas</Black>
          </Title>
          <Text color="#ffffff">
            Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet
          </Text>
          <Search type="text" />
        </ContentText>
        <ContentImage>
          <Image src="/recursos/homePage/parallax.png" />
        </ContentImage>
      </ContentHomePage>
    </Container>
    <ContentSection>
      <Section color="#ff8192">
        <Icon src="/recursos/homePage/icons/cinema.svg" />
        <SectionText>
          <Text color="#ffffff">Lorem ipsum</Text>
          <Text color="#ffffff">
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </Text>
        </SectionText>
      </Section>
      <Section color="#db9e55">
        <Icon src="/recursos/homePage/icons/comment.svg" />
        <SectionText>
          <Text color="#ffffff">Lorem ipsum</Text>
          <Text color="#ffffff">
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </Text>
        </SectionText>
      </Section>
      <Section color="#ffffff">
        <Icon src="/recursos/homePage/icons/ribbon.svg" />
        <SectionText>
          <Text>Lorem ipsum</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </Text>
        </SectionText>
      </Section>
    </ContentSection>
    <Image src="/recursos/homePage/example.jpg" />
  </>
)
