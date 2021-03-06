import styled from 'styled-components'
import ImageNext from 'next/image'

export const Header = styled.div`
  padding: 20px;
  background: #f4f7fa;
  box-shadow: 1px 1px 1px 1px rgb(189 189 189 / 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled(ImageNext)`
  border-radius: 60px;
`
export const Title = styled.p`
  color: #9097a0;
  margin-left: 20px;
`
export const Link = styled.a`
  text-decoration: none;
  color: #9097a0;
  margin-left: 20px;
`
export const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
