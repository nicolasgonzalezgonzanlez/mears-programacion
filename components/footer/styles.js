import styled, { css } from 'styled-components'

import { breakpoints } from 'global-css/brackpoints'

export const Link = styled.a`
  padding: 0px 20px 0px 20px;
  color: #fff;
`
export const FooterComponent = styled.footer`
  background: #6165d7;
  bottom: 0;
  color: white;
  width: 100%;
  min-height: 200px;
`
export const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
export const Container = styled.div`
  @media ${breakpoints.xs} {
    height: 30vh;
  }
  @media ${breakpoints.sm} {
    height: 73vh;
  }
  @media (min-width: ${breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0px 20px 0px 20px;
    align-items: center;
  }
`
export const Content = styled.p`
  ${({ left }) =>
    left &&
    css`
       {
        text-align: end;
      }
    `}
  ${({ right }) =>
    right &&
    css`
       {
        text-align: inherit;
      }
    `}
`
