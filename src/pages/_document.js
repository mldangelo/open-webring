import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
// Adapted from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js

const { GA_TRACKING_ID } = process.env;

/* eslint-disable react/no-danger */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        {GA_TRACKING_ID ? (
          <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
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
          </Head>
        ) : (
          <Head />
        )}
        <body bgcolor="000000" text="7fafef" link="9fbfff" vlink="7fafef">
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
        </body>
      </Html>
    );
  }
}
/* eslint-enable react/no-danger */

export default MyDocument;
