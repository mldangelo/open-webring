import Link from 'next/link';
import { NextSeo } from 'next-seo';

import rings from '../../public/rings.json';

const Index = () => (
  <>
    <NextSeo
      title="Welcome to Open-WebRing!"
      description="A free, open-source, MIT licensed WebRing Community. Join a ring, create your own, or host your own."
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
      <font face="helvetica">
        {rings.map(ring => {
          return (
            <li>
              <b>
                <Link href={`/ring/${ring.slug}`}>
                  <a>{ring.name}</a>
                </Link>
              </b>
              <font size="-1">
                {' '}
                - {ring.count} sites - <a href="">Home</a>{' '}
                <Link href={`/ring/${ring.slug}/list`}>
                  <a>List</a>
                </Link>{' '}
                <Link href={`/ring/${ring.slug}/random`}>
                  <a>Random</a>
                </Link>
              </font>{' '}
              <Link href={`/ring/${ring.slug}/search`}>
                <a>
                  <font size="-1">Search Ring</font>
                </a>
              </Link>
              <br />
              <font face="times">{ring.description}</font>
              <p />
            </li>
          );
        })}
      </font>
    </ul>
  </>
);

export default Index;