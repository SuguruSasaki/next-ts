import React, { ReactElement } from 'react'
import '../styles/globals.css'


type Props = {
  Component: any
  pageProps: any
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
