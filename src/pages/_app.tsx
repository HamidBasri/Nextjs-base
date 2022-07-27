import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import Head from "next/head"
import "tailwindcss/tailwind.css"
import { GlobalStyles } from "twin.macro"

export type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>,
  )
}

export default App
