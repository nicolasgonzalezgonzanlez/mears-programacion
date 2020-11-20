import styled from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const Container = styled.div`
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    min-height: 450px;
    background: rgb(95, 118, 148);
    background: linear-gradient(
      90deg,
      rgba(95, 118, 148, 1) 0%,
      rgba(50, 71, 99, 1) 100%
    );
  }

  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    display: flex;
    justify-content: space-between;
    min-height: 450px;
    align-items: center;
  }
`
export const Image = styled.img`
  max-height: 50vh;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    visibility: hidden;
    height: 10px;
  }
`
export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    color: #fff;
  }
`
export const Subtitle = styled.h3`
  font-size: 17px;
  font-weight: 100;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    color: #fff;
  }

  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    color: #585c60;
  }
`
export const TextGray = styled.span`
  font-size: 13px;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    color: #fff;
  }

  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    color: #9097a0;
  }
`

export const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-top: 60px;
  border: none;
  box-shadow: 1px 1px #9e9e9e;
  background: #a77ff8;
  color: white;
  border-radius: 24px;
`
export const SubContainer = styled.div`
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
  }
  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    max-width: 30%;
  }
`
