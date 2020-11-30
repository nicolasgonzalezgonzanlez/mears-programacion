import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`
export const Circle = styled.div`
  width: 24vw;
  height: 50vh;
  border-radius: 50%;
  background: #f55;
  border: 3px solid #222;
  box-shadow: inset 45px 0px 0 0px #e43333;
`
export const Shadow = styled.div``
export const Line = styled.div`
  position: absolute;
  ${({ left }) =>
    left &&
    css`
       {
        background: black;
        left: 46%;
        top: 44%;
        border-radius: 68%;
        transform: rotate(-207deg);
        width: 2px;
        height: 102px;
      }
    `}
  ${({ right }) =>
    right &&
    css`
       {
        background: black;
        left: 51%;
        top: 43%;
        border-radius: 68%;
        transform: rotate(-333deg);
        width: 4px;
        height: 142px;
      }
    `}
`
export const Eyes = styled.div`
  position: absolute;
  background: #fff;
  border-bottom: 3px solid black;
  ${({ left }) =>
    left &&
    css`
       {
        height: 17vh;
        width: 12vw;
        top: 40%;
        left: 38%;
        clip-path: polygon(10% 50%, 30% 100%, 100% 100%);
        transform: rotate(30deg);
      }
    `}
  ${({ right }) =>
    right &&
    css`
       {
        height: 14vh;
        width: 19vh;
        top: 46%;
        left: 49%;
        clip-path: polygon(0% 100%, 100% 0%, 85% 100%);
        transform: rotate(-14deg);
      }
    `}
`
export const Pupil = styled.div`
  background: black;
  position: absolute;
  border-radius: 50%;
  ${({ left }) =>
    left &&
    css`
       {
        height: 19px;
        width: 12px;
        top: 55.1%;
        left: 44%;
      }
    `}
  ${({ right }) =>
    right &&
    css`
       {
        height: 24px;
        width: 15px;
        top: 57%;
        left: 52%;
      }
    `}
`
export const SmileContent = styled.div`
  width: 24vw;
  height: 50vh;
  border-radius: 50%;
  box-shadow: inset -1px -104px 0px -40px #fff;
`
