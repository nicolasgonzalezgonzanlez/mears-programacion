import Head from 'next/head'
import { Card3dComponent } from 'components/means/card-3d/index'

export default function Card3d() {
  return (
    <>
      <Head>
        <title>Nicolas Gonzalez-Card-3d</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Card3dComponent />
    </>
  )
}
