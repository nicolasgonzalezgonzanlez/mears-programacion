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
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    width: 80%;
  }
  @media ${breakpoints.md}, ${breakpoints.xl} {
    width: 30%;
  }
  @media ${breakpoints.lg} {
    width: 26%;
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
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    width: 50%;
    height: 20%;
  }
  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    width: 15vw;
    height: 25vh;
  }
`
export const ControlButtons = styled.div`
  display: flex;
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    flex-direction: row;
  }
  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    justify-content: space-between;
    transition: all 0.75s ease-out;
  }
`
export const ButtonSize = styled.button`
  width: 20%;
  height: 30px;
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
  @media ${breakpoints.xs}, ${breakpoints.sm} {
    margin: 10px;
  }
`
