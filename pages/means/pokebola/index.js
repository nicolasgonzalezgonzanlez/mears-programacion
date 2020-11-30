import Head from 'next/head'
import { PokebolaComponent } from 'components/means/pokebola/index'
export default function Pokebola() {
  return (
    <>
      <Head>
        <title>Nicolas Gonzalez-Pokebola</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <PokebolaComponent />
    </>
  )
}
