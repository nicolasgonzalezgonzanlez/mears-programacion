import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    margin: 0;
    height: 100%;
  }
  html {
    height: 100%;
  }
  #__next {
    height: 100vh;
  }

`

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}
