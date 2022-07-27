import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import { extractCritical } from "@emotion/server"

const AppDocument = (props: DocumentProps & { ids: any; css: any }) => (
  <Html lang="en">
    <Head>
      <style
        data-emotion-css={props.ids?.join(" ")}
        dangerouslySetInnerHTML={{ __html: props.css }}
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  const critical = extractCritical(initialProps.html)
  initialProps.html = critical.html
  initialProps.styles = (
    <>
      {initialProps.styles}
      <style
        data-emotion-css={critical.ids.join(" ")}
        dangerouslySetInnerHTML={{ __html: critical.css }}
      />
    </>
  )

  return initialProps
}

export default AppDocument
