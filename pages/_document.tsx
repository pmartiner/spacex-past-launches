// Libraries
import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Styled-components server-side Next.js logic
    // Source: https://styled-components.com/docs/advanced#nextjs
    //         https://github.com/vercel/next.js/tree/master/examples/with-styled-components

    // Styled-components creates an instance of ServerStyleSheet.
    // This stylesheet retrieves any styles found in all the components inside our <App />.
    // This then gets passed into our Html template later on.
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // sheets.collectStyles collects all of the styles from the app’s components.
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* 
              sheets.getElement() generates the style tag and you need to
              return it as props called styles.
            */}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render () {    
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
