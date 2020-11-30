import Head from 'next/head'
import { CellPhoneComponents } from 'components/means/cell-phone/index'

export default function CellPhone() {
  return (
    <>
      <Head>
        <title>Nicolas Gonzalez-Cell-phone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CellPhoneComponents />
    </>
  )
}
