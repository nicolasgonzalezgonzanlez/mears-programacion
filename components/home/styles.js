import styled from 'styled-components'
import { breakpoints } from 'global-css/brackpoints'

export const Container = styled.div`
  padding: 0 2vh 2vh 2vh;
  display: grid;

  @media ${breakpoints.xs} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media ${breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media ${breakpoints.md}, ${breakpoints.lg}, ${breakpoints.xl} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`
