import styled from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`
export const Image = styled.img`
  width: 100%;
  z-index: 2;
  transition: all 0.75s ease-out;
`
export const Card = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    width: 80%;
  }
  @media (min-width: ${breakpoints.md}) {
    width: 30%;
  }
  background: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  border-radius: 30px;
`
export const CardSectionTitle = styled.div`
  padding: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardSection = styled.div`
  padding: 45px;
`
export const Button = styled.button`
  height: 40px;
  width: 80%;
  color: #fff;
  background: #f54642;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`
export const CardAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
export const Circle = styled.div`
  background: linear-gradient(
    to right,
    rgba(245, 70, 66, 0.75),
    rgba(8, 83, 156, 0.75)
  );
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  @media (max-width: ${breakpoints.sm}) {
    width: 50%;
    height: 25%;
  }
  @media (min-width: ${breakpoints.md}) {
    width: 15rem;
    height: 15rem;
  }
`
export const ControlButtons = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: space-between;
    transition: all 0.75s ease-out;
  }
`
export const ButtonSize = styled.button`
  padding: 0.5rem 2rem;
  background: none;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  color: #585858;
  &:active {
    background: #585858;
    color: white;
  }
  @media (max-width: ${breakpoints.sm}) {
    margin: 10px;
  }
`
