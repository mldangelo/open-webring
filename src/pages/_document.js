import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import Footer from '../components/footer';
// Adapted from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js

const { GA_TRACKING_ID } = process.env;

/* eslint-disable react/no-danger */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });`
                }}
              />
            </>
          )}
          <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
          <link
            href="https://unpkg.com/@csstools/normalize.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <SiteLinksSearchBoxJsonLd
            url="https://openwebring.com"
            potentialActions={[
              { target: 'https://openwebring.com' },
              { target: 'https://openwebring.com/about' },
              { target: 'https://openwebring.com/how-to' }
            ]}
          />
          <Footer />
        </body>
      </Html>
    );
  }
}
/* eslint-enable react/no-danger */

export default MyDocument;
