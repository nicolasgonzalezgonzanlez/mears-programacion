import {
  ContainerHomePage,
  HeaderHomePage,
  NavigationHomePage,
  SearchHomePage,
  ContentHomePage,
  ContentTextHomePage,
  ContentImageHomePage,
  TextHomePage,
  TitleHomePage,
  BlackHomePage,
  ImageHomePage,
  ContentSectionHomePage,
  SectionHomePage,
  IconHomePage,
  SectionTextHomePage,
} from './styles'
export const HomePageInnovativeComponent = () => (
  <>
    <ContainerHomePage>
      <HeaderHomePage>
        <NavigationHomePage>Home</NavigationHomePage>
        <NavigationHomePage>Team</NavigationHomePage>
        <NavigationHomePage>Login</NavigationHomePage>
        <SearchHomePage type="text" />
      </HeaderHomePage>
      <ContentHomePage>
        <ContentTextHomePage>
          <TitleHomePage>
            <BlackHomePage>New</BlackHomePage> & <br />
            innovative <br />
            <BlackHomePage>ideas</BlackHomePage>
          </TitleHomePage>
          <TextHomePage color="#ffffff">
            Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet
          </TextHomePage>
          <SearchHomePage type="text" />
        </ContentTextHomePage>
        <ContentImageHomePage>
          <ImageHomePage src="/recursos/homePage/parallax.png" />
        </ContentImageHomePage>
      </ContentHomePage>
    </ContainerHomePage>
    <ContentSectionHomePage>
      <SectionHomePage color="#ff8192">
        <IconHomePage src="/recursos/homePage/icons/cinema.svg" />
        <SectionTextHomePage>
          <TextHomePage color="#ffffff">Lorem ipsum</TextHomePage>
          <TextHomePage color="#ffffff">
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </TextHomePage>
        </SectionTextHomePage>
      </SectionHomePage>
      <SectionHomePage color="#db9e55">
        <IconHomePage src="/recursos/homePage/icons/comment.svg" />
        <SectionTextHomePage>
          <TextHomePage color="#ffffff">Lorem ipsum</TextHomePage>
          <TextHomePage color="#ffffff">
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </TextHomePage>
        </SectionTextHomePage>
      </SectionHomePage>
      <SectionHomePage color="#ffffff">
        <IconHomePage src="/recursos/homePage/icons/ribbon.svg" />
        <SectionTextHomePage>
          <TextHomePage>HomePageLorem ipsum</TextHomePage>
          <TextHomePage>
            Lorem ipsum dolor sit amet, consectetuer tincidunt ut laoreet
          </TextHomePage>
        </SectionTextHomePage>
      </SectionHomePage>
    </ContentSectionHomePage>
    <ImageHomePage src="/recursos/homePage/example.jpg" />
  </>
)
