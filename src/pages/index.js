import Link from 'next/link';
import { NextSeo } from 'next-seo';

import rings from '../../public/rings.json';

const RingWorld = () => (
  <div style={{ width: '570px' }}>
    <h2>RingWorld Directory</h2>
    <ul>
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
      <div style={{ width: '570px' }}>
        <p>
          Welcome to Open-WebRing, an homage to the most exciting way to
          navigate the World Wide Web!
        </p>
        <p>
          Open-Webring is a free, open-source, MIT lincensed WebRing community
          designed for hobbyists , enthusiasts, artists, nostalgists, creatives,
          and for you.
        </p>
        <p>
          You can find Rings that interest you by clicking on category links in
          the RingWorld Directory, or by using RingSearch.
        </p>
        <p>
          Member sites can be everywhere. Anytime you find yourself at a WebRing
          member page, just click on the navigation buttons or hypertext links
          to travel to other sites in the Ring.
        </p>
        <p>
          Any web site owner can apply to join an existing Ring orcreate a new
          Ring. Rings may be listed in the RingWorld Directory once they contain
          at least five sites.
        </p>
      </div>
      <RingWorld />
    </div>
  </>
);

export default Index;
