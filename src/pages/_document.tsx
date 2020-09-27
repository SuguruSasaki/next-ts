import React from "react"
import Document, { Html, Main, Head, NextScript, DocumentContext} from 'next/document'

class RootDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return (
      <Html lang="ja">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument