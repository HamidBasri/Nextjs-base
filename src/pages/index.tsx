import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>New Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="h-screen flex flex-col items-center justify-center">
        <h1 tw="text-3xl font-bold underline text-blue-600">Hello Fellow</h1>
      </main>
    </div>
  )
}

export default Home