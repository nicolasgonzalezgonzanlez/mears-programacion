import styled, { css } from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const ContainerHomePage = styled.div`
  background: rgb(75, 132, 188);
  background: linear-gradient(
    90deg,
    rgba(75, 132, 188, 1) 0%,
    rgba(153, 239, 217, 1) 100%
  );
  min-height: 500px;
`

export const HeaderHomePage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const NavigationHomePage = styled.a`
  padding: 20px;
  color: white;
`
export const SearchHomePage = styled.input`
  background: none;
  border: 2px solid white;
  height: 30px;
  border-radius: 40px;
  color: white;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`

export const ContentHomePage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakpoints.xs} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`
export const ContentTextHomePage = styled.div`
  @media ${breakpoints.xs} {
    padding-left: 3vh;
  }
  @media ${breakpoints.sm},
    ${breakpoints.md},
    ${breakpoints.lg},
    ${breakpoints.xl} {
    padding-left: 10vh;
  }
`
export const ContentImageHomePage = styled.div``
export const ImageHomePage = styled.img`
  width: 100%;
`

export const ContentSectionHomePage = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    flex-direction: column;
  }
`
export const SectionHomePage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 200px;
  ${({ color }) =>
    color &&
    css`
       {
        background: ${color};
      }
    `}
`
export const SectionTextHomePage = styled.div`
  margin-right: 15px;
`
export const IconHomePage = styled.img`
  height: 50px;
  margin-right: 20px;
`

export const TitleHomePage = styled.h1`
  color: #ff0000;
  font-weight: 100;
  @media ${breakpoints.xl} {
    font-size: 4.5rem;
  }
  @media ${breakpoints.xs},
    ${breakpoints.sm},
    ${breakpoints.md},
    ${breakpoints.lg}, {
    font-size: 3.5rem;
  }
`
export const BlackHomePage = styled.strong``
export const TextHomePage = styled.p`
  ${({ color }) =>
    color &&
    css`
       {
        color: ${color};
      }
    `}
`
