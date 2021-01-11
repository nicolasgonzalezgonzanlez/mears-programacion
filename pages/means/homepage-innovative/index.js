import Head from 'next/head'
import { HomePageInnovativeComponent as HomePage } from 'components/means/homepage-innovative/index'
export default function HomePageInnovative() {
  return (
    <>
      <Head>
        <title>Nicolas Gonzalez-homepage innovative</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <HomePage />
    </>
  )
}
