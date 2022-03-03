import Document, { Head, Html, Main , NextScript } from 'next/document'

export default class  MyDocument extends  Document {
  render () {
    return (
      <Html>
        <Head>
          <title>Interface Chakra UI</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&?family=Barlow:wght@400;500;600;700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
