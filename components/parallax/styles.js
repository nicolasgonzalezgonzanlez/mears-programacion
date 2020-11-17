import styled from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const Container = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    background-image: url(/parallax.png);
    background-repeat: no-repeat;
    max-height: 400px;
    background-position: center;
    background-size: contain;
  }

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    height: auto;
    max-width: 100%;
    padding: 20px;
  }
`
export const Image = styled.img`
  max-width: 70%;
  @media (max-width: ${breakpoints.sm}) {
    visibility: hidden;
  }
`
export const Title = styled.h1`
  font-size: 23px;
  color: #585c60;
`
export const Subtitle = styled.h3`
  color: #585c60;
  font-size: 15px;
  font-weight: 100;
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
  @media (max-width: ${breakpoints.sm}) {
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
  }
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    max-width: 30%;
  }
`
