import Document, { Html, Head, Main, NextScript } from 'next/document'

const { GOATCOUNTER_CODE } = process.env

class MyDocument extends Document {
  render = () => (
    <Html lang={"en"}>
      <Head />
      <body>
        <Main />
        <NextScript />
        { GOATCOUNTER_CODE && 
          <script data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`} async src="//gc.zgo.at/count.js"></script>
        }
      </body>
    </Html>
  )
}

export default MyDocument

