import Head from 'next/head'
import { Category } from 'components/home/index'
import { Menu } from 'components/header/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolas Gonzalez-Recursos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Menu />
      <Category />
    </>
  )
}
