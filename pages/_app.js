import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'global-css/theme.js'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
