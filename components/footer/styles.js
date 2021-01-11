import styled from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const Link = styled.a`
  padding: 0px 20px 0px 20px;
  color: #fff;
`
export const FooterComponent = styled.footer`
  background: #5179bb;
  color: white;
  min-height: 200px;
`
export const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const Copyright = styled.div`
  background: #0c2340;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  @media ${breakpoints.xs} {
    flex-direction: column;
  }
`

export const ContentImage = styled.div`
  padding: 20px;
`
export const Image = styled.img`
  width: 8vw;
  border-radius: 60%;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    display: none;
  }
`
export const ContentText = styled.div``
export const Content = styled.p``
export const Title = styled.h2``
