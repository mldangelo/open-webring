import Link from 'next/link';
import { NextSeo } from 'next-seo';

import rings from '../../public/rings.json';

const Index = () => (
  <>
    <NextSeo
      title="Open-Webring"
      description="A free, open-source, MIT licensed webring community. Join a ring, create your own, or host your own."
    />
    <h1>Open-Webring</h1>
    <p>
      Learn about how to join or create a ring{' '}
      <Link
        href="https://github.com/mldangelo/open-webring"
        as="https://github.com/mldangelo/open-webring"
      >
        <a>here</a>
      </Link>
      .
    </p>

    <ul>
      {rings.map(ring => {
        return (
          <li>
            <b>
              <Link href={`/ring/${ring.slug}.json`}>
                <a>{ring.name}</a>
              </Link>
            </b>
            <font size="-1">
              {' '}
              - {ring.count} sites - <a href="">Home</a>
            </font>
            <br />
            <font face="times">{ring.description}</font>
            <p />
          </li>
        );
      })}
    </ul>
  </>
);

export default Index;
