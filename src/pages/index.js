import Link from 'next/link';
import { NextSeo } from 'next-seo';

import rings from '../../public/rings.json';

const RingWorld = () => (
  <div style={{ width: '570px' }}>
    <ul>
      <font face="helvetica">
        {rings.map((ring) => (
          <li key={ring.slug}>
            <b>
              <Link href={`/ring/${ring.slug}`}>
                <a>{ring.name}</a>
              </Link>
            </b>
            <font size="-1">
              {' '}
              - {ring.count} sites -{' '}
              <Link href={`/ring/${ring.slug}`}>
                <a>List</a>
              </Link>{' '}
              <Link href={`/ring/${ring.slug}?random}`}>
                <a>Random</a>
              </Link>
            </font>{' '}
            <Link href={`/ring/${ring.slug}/search`}>
              <a>
                <font size="-1">Search Ring</font>
              </a>
            </Link>
            <br />
            <font>{ring.description}</font>
            <p />
          </li>
        ))}
      </font>
    </ul>
  </div>
);

const Index = () => (
  <>
    <NextSeo
      title="Welcome to Open-WebRing!"
      description="A free, open-source, MIT licensed WebRing Community. Join a ring, create your own, or host your own."
    />
    <div className="center">
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

      <RingWorld />
    </div>
  </>
);

export default Index;
